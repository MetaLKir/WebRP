function printOut(title, extra, body) {
    const out = document.querySelector(".result");
    const time = new Date().toLocaleTimeString();
    out.textContent = `[${time}]\n${title}\n` +
        (extra ? extra + '\n' : '') +
        '====================================\n' +
        (body ? (typeof body === 'string' ? body : JSON.stringify(body)) : '');
}