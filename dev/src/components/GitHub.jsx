import React, { useEffect } from "react";
import RepoCard from "./RepoCard.jsx";

export default function GitHub () {

    useEffect(() => {
        async function fetchData (url) {
            return (await fetch (url));
        }
    }, []);

    return (
        <div id="GitHubRepoCards" style={{ "width": "405px" }}> {
                fetchData("https://api.github.com/users/TheBotlyNoob/repos").map(item => (
                    <div className="GitHubRepoCard">
                        <RepoCard username={item?.owner?.login} repository={item?.name} /><br />
                    </div>
                )
            )
        } </div>
  );
}
