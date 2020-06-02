import {createLocalVue, shallowMount, mount} from '@vue/test-utils'

import VueRouter from 'vue-router'
const localVue = createLocalVue()
localVue.use(VueRouter)

import routes from "../../src/router/index_tests.js"
import store from '../../src/store.js'
localVue.use(store)

const ElementUI = require('element-ui');
localVue.use(ElementUI);

import App from '../../src/App.vue'

const router = new VueRouter({ routes })
const wrapper = mount(App, {
  localVue,
  router,
  store,
  stubs: {
    transition: false
  }
})

describe('App.vue', () => {
  it('Testar renderização inicial', async () => {
    await wrapper.vm.$nextTick()

    const h1 = wrapper.find('h1')
    expect(h1.exists()).toBe(true)
    expect(h1.text()).toBe('Smarts Dashboard')
  })
})
