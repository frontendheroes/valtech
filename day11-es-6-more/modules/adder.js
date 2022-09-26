function multiplier(num1, num2){
    return num1 * num2;
};
function adder(num1, num2){
    return num1 + multiplier(num1, num2);
};

// named
// export { adder as add };

// default
// export default adder;
export  {multiplier, adder};