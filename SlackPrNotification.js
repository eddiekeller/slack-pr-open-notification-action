"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = process.env.SLACK_WEBHOOK_URL;
var prNum = process.env.PULL_REQUEST_NUMBER;
var prTitle = process.env.PULL_REQUEST_TITLE;
var prUrl = process.env.PULL_REQUEST_URL;
var prBody = process.env.PULL_REQUEST_BODY || "No description provided.";
var authorName = process.env.PULL_REQUEST_AUTHOR_NAME;
var authorIconUrl = process.env.PULL_REQUEST_AUTHOR_ICON_URL;
var compareBranchOwner = process.env.PULL_REQUEST_COMPARE_BRANCH_OWNER;
var compareBranchName = process.env.PULL_REQUEST_COMPARE_BRANCH_NAME;
var baseBranchOwner = process.env.PULL_REQUEST_BASE_BRANCH_OWNER;
var baseBranchName = process.env.PULL_REQUEST_BASE_BRANCH_NAME;
var sendHereMention = process.env.IS_SEND_HERE_MENTION.toLowerCase() === "true" ? "<!here>\n" : "";
var prFromFork = process.env.IS_PR_FROM_FORK;
var compareBranchText = prFromFork === "true" ? compareBranchOwner + ":" + compareBranchName : compareBranchName;
var baseBranchText = prFromFork === "true" ? baseBranchOwner + ":" + baseBranchName : baseBranchName;
var makePretty = process.env.MAKE_PRETTY ? process.env.MAKE_PRETTY.toLowerCase() === "true" : false; //Priority is pretty > compact > normal
var makeCompact = process.env.MAKE_COMPACT ? process.env.MAKE_COMPACT.toLowerCase() === "true" : false;

var data = {
    Content: "new PR submitted!" + prUrl
};
try {
    const request = {
        url,
        method: 'post',
        headers: {
            "Content-Type": "application/json",
        },
        data,
    };
    axios_1["default"].request(request);
} catch(err) {
    console.log(err);
}
