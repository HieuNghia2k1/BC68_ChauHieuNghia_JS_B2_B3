// Bài 1: Tính tiền lương
// B1: Tạo sự kiện khi click vào nút btnLuong
// B2: Khai báo biến luong để lưu giá trị khi người dùng nhập vào
// B3: Khai báo biến result_01 để thực hiện tính toán
// B4: Show kết quả kèm theo đoạn text mô tả để người dùng dễ hiểu

document.getElementById("btnLuong").onclick = function () {
  let luong = document.getElementById("soNgayLam").value * 1;
  if (luong >= 1) {
    let result_01 = luong * 100000;
    console.log(result_01);
    document.getElementById("ketQua2").innerHTML =
      "Tiền lương nhân viên: " + result_01;
    result_01.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });
  } else {
    return alert("Bạn vui lòng nhập lại số khác nhé!!!");
  }
};

// Bài 02: Tính giá trị trung bình
// B1: Tạo sự kiện khi click vào nút btn_KQ
// B2: Khai báo biến (so1, so2, so3, so4, so5) để lưu trữ giá trị người dùng nhập vào
// B3: Thực hiện tính trung bình cộng các số và show kết quả ở biến ketQua
// B4: Thực hiện trả kết quả kèm theo mô tả để người dùng dễ hình dung
document.getElementById("btn_KQ").onclick = function () {
  let so1 = document.getElementById("so1").value * 1;
  let so2 = document.getElementById("so2").value * 1;
  let so3 = document.getElementById("so3").value * 1;
  let so4 = document.getElementById("so4").value * 1;
  let so5 = document.getElementById("so5").value * 1;

  let ketQua = (so1 + so2 + so3 + so4 + so5) / 5;
  console.log(ketQua);

  document.getElementById("ketQua1").innerHTML =
    "Giá trị trung bình của 5 số trên: " + ketQua;
};

// bài 03: Quy đổi tiển
// B1: Tạo sự kiện khi click vào nút btnTien
// B2: Khai báo biến soTien để lưu trữ giá trị khi user nhập vào
// B3: Khai báo biến quyDoiTien để thực hiện tính toán
// B4: Thực hiện show kết quả vừa tính được ra màn hình

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
// B1: Tạo sự kiện khi click vào nút btnChuVi, và button btnDienTich
// B2: Khai báo biến chieuDai, chieuRong, để lưu trữ giá trị (Chiều dài, chiều rộng) của hình khi user nhập vào
// B3: Khai báo biến chuVihcn để thực hiện tính chu vi hình chữ nhật theo công thức (chiều dài + chiều rộng) * 2
// B4: Khai báo biến dienTichhcn để thực hiện tính diện tích hình chữ nhật theo công thức (chiều dài * chiều rộng)
// B5: Thực hiện show kết quả vừa tính ra màn hình

document.getElementById("btnChuVi").onclick = function () {
  let chieuDai = document.getElementById("dai").value * 1;
  let chieuRong = document.getElementById("rong").value * 1;

  let chuVihcn = (chieuDai + chieuRong) * 2;
  console.log(chuVihcn);
  document.getElementById("chuVi").innerHTML =
    "Chu vi hình chữ nhật: " + chuVihcn + "m";
};

document.getElementById("btnDienTich").onclick = function () {
  let chieuDai = document.getElementById("dai").value * 1;
  let chieuRong = document.getElementById("rong").value * 1;

  let dienTichhcn = chieuDai * chieuRong;
  console.log(dienTichhcn);
  document.getElementById("dienTich").innerHTML =
    "Diện tích hình chữ nhật: " + dienTichhcn + "m2";
};

// Bài 5: Tính tổng 2 ký số
// B1: Tạo sự kiện khi click vào button btnTong
// B2: Khai báo biến number để lưu trữ giá trị khi user nhập vào

document.getElementById("btnTong").onclick = function () {
  let number = document.getElementById("number").value * 1;
  number = parseInt(number);

  if (number <= 10 || number > 100) {
    // return;
    document.getElementById("ketQua5").innerHTML =
      "Bạn vui lòng nhập lại theo giá trị đề bài yêu cầu";
  } else {
    let num1 = number % 10;
    let num2 = Math.floor(number / 10);
    let total = num1 + num2;
    console.log(total);
    document.getElementById("ketQua5").innerHTML = "Tổng 2 ký số : " + total;
  }
};
