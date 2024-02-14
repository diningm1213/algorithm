import { it, expect, describe } from "vitest";
import { subdomainVisits } from "./811-subdomain-visit-count";

describe("Subdomain Visit Count", () => {
  it('["9001 discuss.leetcode.com"]', () => {
    expect(
      subdomainVisits(["9001 discuss.leetcode.com"]).sort((a, b) =>
        a.localeCompare(b)
      )
    ).toEqual(
      ["9001 leetcode.com", "9001 discuss.leetcode.com", "9001 com"].sort(
        (a, b) => a.localeCompare(b)
      )
    );
  });

  it('["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]', () => {
    expect(
      subdomainVisits([
        "900 google.mail.com",
        "50 yahoo.com",
        "1 intel.mail.com",
        "5 wiki.org",
      ]).sort((a, b) => a.localeCompare(b))
    ).toEqual(
      [
        "901 mail.com",
        "50 yahoo.com",
        "900 google.mail.com",
        "5 wiki.org",
        "5 org",
        "1 intel.mail.com",
        "951 com",
      ].sort((a, b) => a.localeCompare(b))
    );
  });
});
