import {model} from './model'
import {App} from './classes/app'
import { sidebar } from './sidebar'
import './styles/main.css'

new App(model, sidebar).init()
