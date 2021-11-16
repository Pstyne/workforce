export const Employee = (emp, potato) => {
  return `
    <article>
      <h3>${emp.firstName} ${emp.lastName}</h3>
      <p>Equipment: ${potato.model}</p>
      <p>Year: ${potato.year}</p>
    </article>
  `;
}