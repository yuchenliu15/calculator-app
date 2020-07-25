import {shallowMount} from '@vue/test-utils';
import App from '../../src/App.vue';

const wrapper = shallowMount(App);

describe('App component', () => {
    it('parse input values and operators correctly', () => {
        const parseInput = wrapper.vm.parseInput;
        console.log(typeof parseInput('11+211'));
        expect(parseInput('11+211')).toMatchObject(['11', '+', '211']);
        expect(parseInput('2+5+21')).toMatchObject(['2', '+', '5', '+', '21']);
        expect(parseInput('11/11')).toMatchObject(['11', '/', '11']);
        expect(parseInput('11+211+1-12'))
            .toMatchObject(['11', '+', '211', '+', '1', '-', '12']);
        expect(parseInput('11%333')).toMatchObject(['11', '%', '333']);

    });
})