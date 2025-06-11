import { enviroment } from "../enviroments/enviroment";

export const postHomeForm = async (data) => {
    const apiUrl = `${enviroment.apiUrl}/contact`;
    console.log("API URL:", apiUrl);

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return response;
    };