/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
    styleUrls: ['./about.component.scss'],
    templateUrl: './about.component.html'
})
export class AboutComponent {
    apixAuth: any[] = [
        {   "id": "basic",
            "swaggerAuthName": "BasicAuth",
            "displayName": "BasicAuth",
            "authUrl": "/api/v1"
        },
        {   "id": "vcenter_sso",
            "swaggerAuthName": "ApiKeyAuth",
            "displayName": "vCenter SSO",
            "authUrl": "/rest/com/vmware/cis/session"
        },
        {   "id": "vra_sso",
            "swaggerAuthName": "ApiKeyAuth",
            "displayName": "vRealize Automation SSO",
            "authUrl": "/api/v1"
        }
        ]

}
