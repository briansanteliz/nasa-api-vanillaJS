export class Api {
  url = "YwREkBkQFjIdfV4KtnZ7NMRK7z7lvxrm0WdLVe7N";

  async Query() {
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${this.url}`
    );
    return res.json();
  }
  async Search(date) {
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${this.url}&date=${date}`
    );
    const response = res.json();
    return response;
  }
}
