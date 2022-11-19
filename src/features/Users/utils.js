export const getFullName = (
  firstname = "",
  middlename = "",
  lastname = "",
  isLink
) => {
  if (isLink) {
    return (firstname + middlename + lastname)
      .replace(" ", "")
      .toLocaleLowerCase();
  }
  return firstname + " " + middlename + " " + lastname + " ";
};
