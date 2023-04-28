let main = document.querySelector('#main')
let page = {
    '#signup':`  
    <form>
        <link rel="stylesheet" href="signup.css">
        <input type="text" placeholder="姓氏"><br>
        <input type="text" placeholder="名字"><br>
        <input type="text" placeholder="手機號碼或電子信箱"><br>
        <input type="text" placeholder="設定密碼"><br>
        <label>出生日期</label><br>
        <input type="date"><br>
        <label>性別</label><br>
        <input type="radio" id="woman" name="性別" value="女性" >
      <label for="woman">女性</label>
      <input type="radio" id="man" name="性別" value="男性">
      <label for="man">男性</label>
      <input type="radio" id="other" name="性別" value="其他">
      <label for="other">其他</label><br>
        <label for="血型">血型</label><br>
        <select id="血型" name="血型">
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="O">O</option>
        <option value="AB">AB</option>
        </select>
        <input type="submit" value="註冊">
    </form>
    `,
    '#login':`
    <form>
        <link rel="stylesheet" href="login.css">
        <input type="text" placeholder="帳號"><br>
        <input type="text" placeholder="密碼"><br>
        <input type="submit" value="登入">
    </form>
    `
}
window.onhashchange = function () {
    let hash = window.location.hash
    main.innerHTML = page[hash]
}