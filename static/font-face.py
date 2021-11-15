from fontforge import open as openf
import os
from sys import argv
import glob

EXTS = [".woff", "woff2", ".ttf", ".otf", ".svg", ".eot"]


def main(fonts):
    generateCss(fonts)
    generateFonts(fonts)


def generateCss(fontFiles):
    for fontFile in fontFiles:
        fontFamily = openf(fontFile).fullname
        fontWeight = "normal"
        fontStyle = "normal"

        if " Italic" in fontFamily:
            fontStyle = "italic"
            fontFamily = fontFamily.replace(" Italic", "")

        CSS = (
            "@font-face {\
            \n\tfont-family: '"
            + fontFamily
            + "';\
            \n\tsrc: url('fonts/"
            + fontFile
            + ".eot');\
            \n\tsrc: local('"
            + fontFamily
            + "'), local('"
            + fontFile
            + "')\
            \n\turl('fonts/"
            + fontFile
            + ".eot?#iefix') format('embedded-opentype'),\
            \n\turl('fonts/"
            + fontFile
            + ".woff') format('woff'),\
            \n\turl('fonts/"
            + fontFile
            + ".woff2') format('woff2'),\
            \n\turl('fonts/"
            + fontFile
            + ".ttf') format('truetype'),\
            \n\turl('fonts/"
            + fontFile
            + ".svg#ywftsvg') format('svg');\
            \n\tfont-weight: "
            + fontWeight
            + ";\
            \n\tfont-style: "
            + fontStyle
            + ";\
            \n\tfont-display: swap;\
            \n}\n\n"
        )

        miniCSS = (
            "@font-face{font-family:'"
            + fontFamily
            + "';src:url('fonts/"
            + fontFile
            + ".eot');src:local('"
            + fontFamily
            + "'),local('"
            + fontFile
            + "'),url('fonts/"
            + fontFile
            + ".eot?#iefix')format('embedded-opentype'),url('fonts/"
            + fontFile
            + ".woff')format('woff'),url('fonts/"
            + fontFile
            + ".woff2')format('woff2'),url('fonts/"
            + fontFile
            + ".ttf')format('truetype'),url('fonts/"
            + fontFile
            + ".svg#ywftsvg')format('svg');font-weight:"
            + fontWeight
            + ";font-style:"
            + fontStyle
            + ";font-display:swap;}"
        )

        open("index.css", "w+").write(CSS)
        open("index.min.css", "w+").write(miniCSS)


def generateFonts(fontFiles):
    for fontFile in fontFiles:
        font = openf(fontFile)
        if not os.path.exists("fonts"):
            os.mkdir(f"fonts/{font.fullname.replace(' ', '-')}")
        elif not os.path.exists(f"fonts/{font.fullname.replace(' ', '-')}"):
            os.mkdir(f"fonts/{font.fullname.replace(' ', '-')}")
        for ext in EXTS:
            font.generate(
                f"fonts/{font.fullname.replace(' ', '-')}/{os.path.splitext(os.path.basename(fontFile))[0] + ext}"
            )


if __name__ == "__main__":
    if len(argv) > 1:
        if argv[1] == "-d":
            for dir in argv[2:]:
                if not os.path.isdir(dir):
                    raise ValueError("The Directories Must Be Directories")
                main(glob.glob(dir + "/*.{" + ",".join(EXTS) + "}"))
        else:
            main(argv[1:])
    else:
        raise ValueError("You Need A Directory/File To Create A Font Face For!")
