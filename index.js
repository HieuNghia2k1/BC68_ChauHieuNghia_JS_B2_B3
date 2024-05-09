// Bài 1: Tính tiền lương
// B1: Tạo sự kiện khi click vào nút btnLuong
// B2: Khai báo biến luong để lưu giá trị khi người dùng nhập vào
// B3: Khai báo biến result_01 để thực hiện tính toán
// B4: Show kết quả kèm theo đoạn text mô tả để người dùng dễ hiểu

document.getElementById("btnLuong").onclick = function () {
  let luong = document.getElementById("soNgayLam").value * 1;
  let result_01 = luong * 100000;
  console.log(result_01);
  document.getElementById("ketQua2").innerHTML =
    "Tiền lương nhân viên: " +
    result_01.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });
};

// Bài 02: Tính giá trị trung bình
document.getElementById("btn_KQ").onclick = function () {
  let so1 = document.getElementById("so1").value * 1;
  let so2 = document.getElementById("so2").value * 1;
  let so3 = document.getElementById("so3").value * 1;
  let so4 = document.getElementById("so4").value * 1;
  let so5 = document.getElementById("so5").value * 1;

  let ketQua = (so1 + so2 + so3 + so4 + so5) / 5;
  console.log(ketQua);
  // console.log("hihihi");
  // document.getElementById("ketQua").innerHTML =
  //   "Giá trị trung bình cộng: " +
  //   ketQua.toLocaleString("vi", {
  //     style: "text",
  //   });
  document.getElementById("ketQua1").innerHTML =
    "So tien luong ban lam duoc thang nay: " +
    ketQua.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });
  // +
  // ketQua.toLocaleString("vi", {
  //   style: "currency",
  //   // currency: "VND",
  // });
};

// bài 03: Quy đổi tiển
document.getElementById("btnTien").onclick = function () {
  let soTien = document.getElementById("soTien").value * 1;
  let quyDoiTien = soTien * 23.5;
  console.log(quyDoiTien);
  document.getElementById("ketQua3").innerHTML =
    "Số tiền quy đổi sang VND: " +
    quyDoiTien.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });
};

// Bài 4: Tính diện tích, chu vi hình chữ nhật
document.getElementById("btnChuVi").onclick = function () {
  let chieuDai = document.getElementById("dai").value * 1;
  let chieuRong = document.getElementById("rong").value * 1;

  let chuVihcn = (chieuDai + chieuRong) * 2;
  console.log(chuVihcn);
  document.getElementById("chuVi").innerHTML =
    "Chu vi hình chữ nhật: " + chuVihcn;
};

document.getElementById("btnDienTich").onclick = function () {
  let chieuDai = document.getElementById("dai").value * 1;
  let chieuRong = document.getElementById("rong").value * 1;

  let dienTichhcn = chieuDai * chieuRong;
  console.log(dienTichhcn);
  document.getElementById("dienTich").innerHTML =
    "Diện tích hình chữ nhật: " + dienTichhcn;
};

// Bài 5: Tính tổng 2 ký số
document.getElementById("btnTong").onclick = function () {
  let number = document.getElementById("number").value * 1;

  let num1 = number / 10;
  let num2 = number % 10;
  let total = num1 + num2;
  console.log(total);
  document.getElementById("ketQua5").innerHTML = "Tổng 2 ký số : " + total;
};
