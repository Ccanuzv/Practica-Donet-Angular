import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <div class="layout-footer">
            <div class="layout-footer-left">
                <span>Carlo Canuz </span>
                <a href="https://www.linkedin.com/in/carlos-canuz-71281b207/">PrimeTek</a>
            </div>

            <div class="layout-footer-right">
                <a href="https://github.com/Ccanuzv" class="mr-3">
                    <i class="pi pi-github"></i>
                </a>
            </div>
        </div>
    `
})
export class AppFooterComponent {}
