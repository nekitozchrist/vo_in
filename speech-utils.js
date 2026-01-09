/**
 * Функция для выбора лучшей альтернативы из результатов распознавания речи
 * @param {SpeechRecognitionResult} result - Результат распознавания речи
 * @returns {string} Лучший вариант распознанного текста
 */
function selectBestAlternative(result) {
    // Проверка на существование результата
    if (!result || result.length === 0) {
        return "";
    }
    
    // Если нет альтернатив, возвращаем основной результат
    if (result.length === 1) {
        return result[0].transcript || "";
    }
    
    // Ищем вариант с наибольшей уверенностью
    let bestTranscript = result[0].transcript || "";
    let maxConfidence = result[0].confidence || 0;
    
    for (let j = 1; j < result.length; j++) {
        // Проверка на существование альтернативы
        if (result[j] && result[j].confidence > maxConfidence) {
            maxConfidence = result[j].confidence;
            bestTranscript = result[j].transcript || "";
        }
    }
    
    return bestTranscript;
}

// Экспортируем функцию для использования в других файлах
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { selectBestAlternative };
}
