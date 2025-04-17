// function sendit() {
//   const userid = document.getElementById("userid");
//   const userpw = document.getElementById("userpw");
//   const userpw_re = document.getElementById("userpw_re");
//   const name = document.getElementById("name");
//   const hp = document.getElementById("hp");
//   const expIdtext = /^[A-Za-z0-9]{4,20}$/;
//   const exppwtext =
//     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
//   const expNameText = /^[가-힣]+$/;
//   const expHpText = /^\d{3}-\d{3,4}-\d{4}$/;

//   if (userid.value === "") {
//     alert("아이디를 입력해주세요");
//     userid.focus();
//     return false;
//   }

//   if (!expIdtext.test(userid.value)) {
//     alert("아이디는 4자이상20자이하 영문자와 숫자만 사용");
//     userid.focus();
//     return false;
//   }

//   if (!exppwtext.text(userpw.value)) {
//     alert(
//       "비밀번호는 8자이상 20자 이하의 영문자, 숫자, 특수문자를 한 자이상 꼭 포함해야합니다."
//     );
//     userpw.focus();
//     return false;
//   }

//   if (userpw.value != userpw_re.value) {
//     alert("비밀번호 불일치");
//     userpw_re.focus();
//     return false;
//   }

//   if (!expNameText.test(name.value)) {
//     alert("이름은 한글로 입력하세요.");
//     name.focus();
//     return false;
//   }

//   if (!expHpText.test(hp.value)) {
//     alert("휴대폰 번호 형식이 일치하지 않습니다.\n-하이픈을 입력하세요");
//     name.focus();
//     return false;
//   }
//   return true;
// }

window.onload = function () {
  const ssn1 = document.getElementById("ssn1");
  ssn1.addEventListener("keyup", () => {
    if (ssn1.value.length >= 6) {
      document.getElementById("ssn2").focus();
    }
  });

  //주민 번호 검증 통과하고 나서 하나라도 바꾸면 다시 검증 버튼 눌러야하는 상태로 바꿈
  const ssn = document.querySelectorAll(".ssn");
  ssn.forEach((s) => {
    s.addEventListener("input", () => {
      document.getElementById("ssncheck").value = "n";
    });
  });
};

//주민번호 검증 실습 코드
function checkssn() {
  const ssn1 = document.getElementById("ssn1");
  const ssn2 = document.getElementById("ssn2");
  const ssn = ssn1.value + ssn2.value;

  const weights = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
  let result = 0;
  for (let i = 0; i < weights.length; i++) {
    result += parseInt(ssn[i] * weights[i]);
  }

  result = (11 - (result % 11)) % 10;

  if (result == parseInt(ssn[12])) {
    alert("유효한 주민번호");
  } else {
    alert("주민번호 불일치");
  }
}

function sendit() {
  const userid = document.getElementById("userid");
  const userpw = document.getElementById("userpw");
  const userpw_re = document.getElementById("userpw_re");
  const name = document.getElementById("name");
  const hp = document.getElementById("hp");
  const email = document.getElementById("email");

  const expIdText = /^[A-Za-z0-9]{4,20}$/;
  const expPwText =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
  const expNameText = /^[가-힣]+$/;
  const expHpText = /^\d{3}-\d{3,4}-\d{4}$/;
  //const expemailtext = /^[A-Za-z0-9@\-]+@[A-Za-z0-9\-]+\.[A-Za-z]{2,}$/;
  const expEmailText = /^[A-Za-z0-9\-\.]+@[A-Za-z0-9\-]+\.[A-Za-z]+$/;

  if (userid.value === "") {
    alert("아이디를 입력해주세요.");
    userid.focus();
    return false;
  }
  if (!expIdText.test(userid.value)) {
    alert("아이디는 4자이상 20자이하의 영문자 및 숫자로 입력하세요.");
    userid.focus();
    return false;
  }
  if (!expPwText.test(userpw.value)) {
    alert(
      "비밀번호는 8자이상 20자이하의 영문자, 숫자, 특수문자를 한 자이상 꼭 포함해야합니다."
    );
    userpw.focus();
    return false;
  }
  if (userpw.value != userpw_re.value) {
    alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    userpw_re.focus();
    return false;
  }
  if (!expNameText.test(name.value)) {
    alert("이름은 한글로 입력하세요.");
    name.focus();
    return false;
  }
  if (!expHpText.test(hp.value)) {
    alert("휴대폰번호 형식이 일치하지 않습니다.\n-하이픈을 꼭 입력하세요!");
    hp.focus();
    return false;
  }
  if (!expemailtext.test(email.value)) {
    alert(
      "이메일 형식에 맞게 입력해주세요. 이메일은 중간에 반드시 @이 들어갑니다"
    );
    email.focus();
    return false;
  }
  return true;
}
