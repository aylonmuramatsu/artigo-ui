Number.prototype.money = function(properties = {}){
  const {
    precision = 2,
    thousandSeparator = '.',
    decimalSeparator = ',',
    prefix = 'R$ '
  } = properties;
  let re = `\\d(?=(\\d{3})+${precision > 0 ? '\\D' : '$'})`,
    num = this.toFixed(Math.max(0, ~~precision));
  return `${prefix}${num.replace('.', decimalSeparator).replace(new RegExp(re, 'g'), '$&' + (thousandSeparator))}`;
}
