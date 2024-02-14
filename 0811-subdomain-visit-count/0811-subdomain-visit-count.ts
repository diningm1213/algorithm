function subdomainVisits(cpdomains: string[]): string[] {
  const answer: string[] = [];
  const subdomainMap = new Map();

  cpdomains.forEach((cpdomain) => {
    const [cp, domain] = cpdomain.split(" ");
    const splitSubdomains = domain.split(".").reverse();
    let subdomain = "";
    splitSubdomains.forEach((splitSubdomain) => {
      if (subdomain) {
        subdomain = [splitSubdomain, subdomain].join(".");
      } else {
        subdomain = splitSubdomain;
      }

      subdomainMap.set(
        subdomain,
        subdomainMap.has(subdomain) ? subdomainMap.get(subdomain) + +cp : +cp
      );
    });
  });

  for (const [key, value] of subdomainMap.entries()) {
    answer.push(`${value} ${key}`);
  }

  return answer;
}
