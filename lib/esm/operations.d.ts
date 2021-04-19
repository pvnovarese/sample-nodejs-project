import sum from './operations/sum';
import subtract from './operations/subtract';
declare const Operations: {
    sum: typeof sum;
    subtract: typeof subtract;
};
export { Operations as default };
