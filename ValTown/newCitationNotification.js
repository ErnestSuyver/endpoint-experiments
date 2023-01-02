export async function newCitationNotification(interval) {
  let url =
    "https://opencitations.net/index/coci/api/v1/citations/10.1002/14651858.CD013665";
  let results = await @stevekrouse.fetchJSON(url);
  let newresults = results.filter(
    (c) => Date.parse(c.creation) > new Date(interval.lastRunAt).getTime()
  );
  if (newresults.length) console.email(newresults);
  return newresults;
}
