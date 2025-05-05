document.addEventListener("DOMContentLoaded", function () {
    const noteField = document.getElementById("note");
    const charCount = document.getElementById("charCount");
    const maxLength = noteField.maxLength;
  
    noteField.addEventListener("input", function () {
      const remaining = maxLength - noteField.value.length;
      charCount.textContent = `Còn lại: ${remaining} ký tự`;
    });
  });
document.addEventListener("DOMContentLoaded", function () { 
    const form = document.querySelector("form");
    const list = document.createElement("ul"); // tạo danh sách
    document.body.appendChild(list); // thêm vào cuối trang
  
    form.addEventListener("submit", function (event) 
    {
      event.preventDefault(); // chặn reload trang
  
      const title = form.elements["title"].value;
      const amount = form.elements["amount"].value;
      const date = form.elements["date"].value;
      const note = form.elements["note"].value;
  
      const item = document.createElement("li");
      item.textContent = `${title} - ${amount} VND - ${date} - ${note}`;
      list.appendChild(item);
  
      form.reset(); // xóa dữ liệu sau khi thêm
    });
  });