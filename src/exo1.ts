import axios from "axios";

export async function getUserSummary(id: number) {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    if (response.data) return formatUser(response.data);
  } catch (error) {
    throw new Error("User not found");
  }
}

function formatUser(user: any) {
  let name = user.name.split(" ")[0].toLowerCase();
  const result = `${user.name} (${name}) - ${user.email}`;
  console.log(result);
  return result;
}