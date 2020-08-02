export class Api {
  async Query() {
    const url = "YwREkBkQFjIdfV4KtnZ7NMRK7z7lvxrm0WdLVe7N";
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${url}`
    );
    return res.json();
  }
  async Search(date){
    const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${url}&date=${date}`
      );
      return res.json()
  }
}
