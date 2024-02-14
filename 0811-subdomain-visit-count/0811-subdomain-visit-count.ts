function subdomainVisits(cpdomains: string[]): string[] {
  const answer: string[] = [];
  const subdomainMap = new Map();

  cpdomains.forEach((cpdomain) => {
    const [cp, domain] = cpdomain.split(" ");
    const splitSubdomains = domain.split(".").reverse();
    splitSubdomains.reduce<string[]>((acc, cur) => {
      acc.unshift(cur);
      const combinedDomain = acc.join(".");
      subdomainMap.set(
        combinedDomain,
        subdomainMap.has(combinedDomain)
          ? subdomainMap.get(combinedDomain) + +cp
          : +cp
      );
      return acc;
    }, []);
  });

  for (const [key, value] of subdomainMap.entries()) {
    answer.push(`${value} ${key}`);
  }

  return answer;
}
