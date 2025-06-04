import { enviroment } from "../enviroments/enviroment";

export const postContactForm = async (data) => {
    const apiUrl = `${enviroment.apiUrl}/xxxx`;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return response;
    };