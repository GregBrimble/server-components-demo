/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// Error early if this is accidentally imported on the client.
import "server-only";

import { Pool } from "pg";
import credentials from "../credentials";

// Don't keep credentials in the source tree in a real app!
export const db = new Pool(credentials);
