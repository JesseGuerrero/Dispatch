import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import 'nprogress/nprogress.css';
import App from 'src/App';
import { SidebarProvider } from 'src/contexts/SidebarContext';
import * as serviceWorker from 'src/serviceWorker';
import {NewsletterContext, NewsletterProvider} from "./contexts/NewsletterContext";

ReactDOM.render(
  <HelmetProvider>
    <NewsletterProvider>
    <SidebarProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SidebarProvider>
    </NewsletterProvider>
  </HelmetProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
