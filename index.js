// 다른 언어들에서 했던 것과 달리 이번엔 액기스만 모아서 정리할 예정

// number to string
function atoi() {
    let strNum = "Hello11"
    let numStr = "11Hello"
    
    // option 1 parseInt
    parseInt(strNum) // NaN
    parseInt(numStr) // 11
        // parseInt는 숫자가 먼저 있으면 뒤의 문자를 지우고 number로 반환
        
    // option 2 Number
    Number(strNum) // NaN
    Number(numStr) // NaN
        // Number는 숫자가 먼저 있더라도 NaN을 넣음
}

// continue break
function loop() {
    // 단순히 continue는 loop의 return같이
    // 해당 반복문에서 continue가 실행되면 해당 회차를 스킵함.
    
    for (let i = 0; i < 10; i++) {
        if (i == 8) continue // i == 8 ? "don't print anything"
        console.log(i)
    }
}

// 재귀함수
function factorial(num) {
    const endNum = 1
    if (num == endNum) return endNum
    else return num * factorial(num - 1)
    // 함수내에서 자기 자신을 호출하여 한번에 값을 return함.
}

// 함수 표현식
function funcExplain() {
    function a() {} // 함수 선언식
    const b = function() {} // 함수 표현식
    
    // 선언식을 통해 선언된 함수는 런타임이 먼저 읽어 지역만 신경쓰면 됬으나
    // 표현식은 "함수"를 만든게 아닌 "변수"에 함수를 담은 것이라
    // *추측상 익명 함수로 읽고 그걸 변수에 대입함으로써 이름을 가지고
    // 그를 통해 call이 가능해 지는게 아닌가 싶음.
}

// 구조분해 할당
function structure() {
    const obj = {
        name: "hello",
        desc: "hello World"
    }
    
    const {name, desc} = obj // 구조분해할당
    b(obj)
    
    // 구조분해할당은 함수에서도 사용 가능
    function b({name, desc}) { 
        console.log(`name: ${name} \n description: ${desc}`)
    }
}