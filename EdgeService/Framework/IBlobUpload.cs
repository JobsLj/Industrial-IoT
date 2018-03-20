﻿// ------------------------------------------------------------
//  Copyright (c) Microsoft Corporation.  All rights reserved.
//  Licensed under the MIT License (MIT). See License.txt in the repo root for license information.
// ------------------------------------------------------------

namespace Microsoft.Azure.Devices.Edge {
    using System.Threading.Tasks;

    public interface IBlobUpload {

        /// <summary>
        /// Upload blob
        /// </summary>
        /// <param name="fileName"></param>
        /// <param name="contentType"></param>
        /// <returns></returns>
        Task SendAsync(string fileName, string contentType);
    }
}