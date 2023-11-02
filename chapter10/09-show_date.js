const today = new Date().toLocaleDateString('ja-JP',{
    dateStyle: 'long'
});
console.log(today);

const formatter = Intl.DateTimeFormat('ja-JP',{
    dateStyle: 'long'
});
const today2 = formatter.format(new Date());
console.log(today);