export const Employee = (emp, potato, personalHell, dumpster) => {
  return `
    <article>
      <h3>${emp.firstName} ${emp.lastName}</h3>
      <p>Department: ${personalHell.name}</p>
      <p>Location: ${dumpster.name}</p>
      <p>Equipment: ${potato.model}</p>
      <p>Year: ${potato.year}</p>
    </article>
  `;
}