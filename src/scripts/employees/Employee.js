export const Employee = (emp, potato, personalHell) => {
  return `
    <article>
      <h3>${emp.firstName} ${emp.lastName}</h3>
      <p>Department: ${personalHell.name}</p>
      <p>Equipment: ${potato.model}</p>
      <p>Year: ${potato.year}</p>
    </article>
  `;
}