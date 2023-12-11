import type { Commit, commits } from "./commits.js";

type CommitsApiResponse = typeof commits;

export const mapApiResponseToCommits = (
  commitApiResponse: CommitsApiResponse,
): Commit[] => {
  return commitApiResponse.items
    .map((commit) => {
      if (!commit.author) {
        return null;
      }

      const hour = commit.commit.author.date.match(/T([0-9]+)/);
      if (!hour) {
        return;
      }

      return {
        author: commit.author.login,
        date: new Date(commit.commit.author.date).getTime(),
        hour: Number(hour[1]),
        message: commit.commit.message,
        repo: commit.repository.owner.login + "/" + commit.repository.name,
      };
    })
    .filter(Boolean) as Commit[];
};
