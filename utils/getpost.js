import axios from "axios";
const baseUrl = process.env.apiDomain;

export async function getPostLists() {
  try {
    const url = `${baseUrl}/main/viewblog`;
    const response = await axios.get(url, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    // console.log("post list data:", response.data);
    return response.data.data;
  } catch (error) {
    console.error("error fetching post list data:", error);
  }
}

export async function getPostDetail(id) {
  try {
    const formData = new FormData();
    formData.append("idblog", id);

    const url = `${baseUrl}/main/viewblogdetail`;
    const response = await axios.post(url, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    // console.log("post detail data:", response.data);
    const { data } = response.data;
    if (data && data.length > 0) {
      return data[0];
    } else {
      throw new Error("data not found");
    }
  } catch (error) {
    console.error("Error fetching post detail data:", error);
  }
}
