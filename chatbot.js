const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
    const userMessage = userInput.value;
    if (userMessage.trim() === "") return;

    // 사용자 메시지 추가
    chatbox.innerHTML += `<div>나: ${userMessage}</div>`;
    userInput.value = '';

    // 챗봇의 응답
    const botResponse = getBotResponse(userMessage);
    chatbox.innerHTML += `<div>챗봇: ${botResponse}</div>`;
    chatbox.scrollTop = chatbox.scrollHeight; // 자동 스크롤
});

function getBotResponse(input) {
    // 감정 기반 응답 추가
    if (input.includes("슬퍼요") || input.includes("슬프다")) {
        return "아, 힘들군요. 괜찮아지길 바랄게요.";
    } else if (input.includes("행복해요") || input.includes("행복하다")) {
        return "와, 좋은 소식이네요! 계속 행복하세요!";
    } else if (input.includes("화나요") || input.includes("화나")) {
        return "그럴 때도 있죠. 잠시 숨을 고르고 마음을 가라앉혀 보세요.";
    } else if (input.includes("고마워") || input.includes("감사합니다")) {
        return "별말씀을요! 언제든지 도와드릴게요.";
    } else if (input.includes("안녕하세요")) {
        return "안녕하세요! 어떻게 도와드릴까요?";
    } else if (input.includes("레시피")) {
        return "어떤 요리 레시피를 원하시나요?";
    } else {
        return "죄송합니다. 이해하지 못했습니다.";
    }
}
