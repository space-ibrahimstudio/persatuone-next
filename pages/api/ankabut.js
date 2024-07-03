import axios from "axios";

const apiUrl = process.env.apiDomain;

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { scope, endpoint } = req.query;
    if (!scope || !endpoint) {
      res.status(400).json({ error: "Missing parameters" });
      return;
    }

    try {
      const url = `${apiUrl}/${scope}/${endpoint}`;
      const response = await axios.get(url, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      return res.status(response.status).json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else if (req.method === "POST") {
    const { scope, endpoint, type, requestData, ...tableData } = req.body;
    if (!scope || !endpoint || !requestData) {
      res.status(400).json({ error: "Missing parameters" });
      return;
    }

    try {
      const formData = new FormData();
      if (type === "tabledata") {
        for (const key in tableData) {
          formData.append(key, tableData[key]);
        }
      } else {
        formData.append("data", requestData);
      }

      const url = `${apiUrl}/${scope}/${endpoint}`;
      const response = await axios.post(url, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      return res.status(response.status).json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
