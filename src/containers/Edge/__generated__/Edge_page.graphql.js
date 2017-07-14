/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule Edge_page.graphql
 * @generated SignedSource<<611fefaa5c34dccbcddb9b013ab599a2>>
 * @flow
 * @nogrep
 */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type Edge_page = {
  title?: ?string;
  description?: ?string;
  pageEdge?: ?Edge_page_pageEdge;
};

export type Edge_page_pageEdge_edges_node = {
  id: string;
  _id: string;
  title?: ?string;
};

export type Edge_page_pageEdge_edges = {
  node?: ?Edge_page_pageEdge_edges_node;
};

export type Edge_page_pageEdge = {
  edges?: ?Array<?Edge_page_pageEdge_edges>;
};
*/

/* eslint-disable comma-dangle, quotes */

const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Edge_page",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "title",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "description",
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "PageConnection",
      "name": "pageEdge",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "PageEdge",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "args": null,
              "concreteType": "Page",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "id",
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "_id",
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "title",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Page"
};

module.exports = fragment;