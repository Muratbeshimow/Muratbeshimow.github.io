let nums = [1, 2, 3, 4, 5, 7];
let colors = ["blue", "green", "yellow", "black"]

function ShowArrayBigger5(p) {
    return (
        p.array.filter(i => i > 5).map(i => <div>{i}</div>))

}

function ShowColorsNoBlack(p) {
    return (
        p.colors.filter(i => i != "black").map(i => <div>{i}</div>))

}

const main = ReactDOM.createRoot(document.getElementById("main"));


function PricedPlusVAT(p) {
    return (
        p.array.map(i => <div>{i * 1.17}$</div>)
    )
}

main.render(<ShowColorsNoBlack colors={colors} />);