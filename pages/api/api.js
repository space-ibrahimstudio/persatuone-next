import axios from "axios";

// const baseUrl = process.env.NEXT_APP_BASE_URL;

export async function handleContactUs(inputData) {
  try {
    const formData = new FormData();
    formData.append(
      "data",
      JSON.stringify({
        yourname: inputData.name,
        yourphone: inputData.phone,
        youremail: inputData.email,
        subject: inputData.subject,
        message: inputData.message,
      })
    );

    const response = await axios.post(
      "https://api.zeroalpha.xyz/persatu_one/addcontactus",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("Contact us response:", response.data);
  } catch (error) {
    console.error("Error during submit contact info & messages:", error);
  }
}
