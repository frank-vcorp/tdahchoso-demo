/* GENERADO desde product-contract.json · no editar directamente */
window.PRODUCT_STUDIO_MODEL = {
  "schemaVersion": 1,
  "product": {
    "name": "TDAHCHOSO",
    "subtitle": "Una cosa a la vez",
    "version": "0.1.0-demo",
    "description": "Tres recorridos de bienestar y organización",
    "disclaimer": "DEMO / DATOS FICTICIOS / SIN EFECTOS REALES"
  },
  "roles": [
    {
      "id": "ALEX",
      "name": "Alex",
      "initials": "AL",
      "purpose": "Perfil ficticio para recorrer la simulación"
    },
    {
      "id": "NICO",
      "name": "Nico",
      "initials": "NI",
      "purpose": "Perfil ficticio para recorrer la simulación"
    },
    {
      "id": "LUZ",
      "name": "Luz",
      "initials": "LU",
      "purpose": "Perfil ficticio para recorrer la simulación"
    }
  ],
  "requirements": [
    {
      "id": "RF-001",
      "title": "Acompañar el regreso a una actividad",
      "status": "PROPUESTA",
      "source": "Recorridos acordados en conversación"
    },
    {
      "id": "RF-002",
      "title": "Preparar materiales y solicitar apoyo",
      "status": "PROPUESTA",
      "source": "Recorridos acordados en conversación"
    },
    {
      "id": "RF-003",
      "title": "Consultar y actualizar una lista compartida",
      "status": "PROPUESTA",
      "source": "Recorridos acordados en conversación"
    }
  ],
  "scenarios": [
    {
      "id": "FL-001",
      "name": "Cotización interrumpida",
      "objective": "Acompañar el regreso a una actividad",
      "source": "Recorridos conversados; datos ficticios",
      "status": "PROPUESTA",
      "personas": [
        "ALEX"
      ],
      "initialCase": {
        "id": "CASO-001",
        "title": "Cotización interrumpida",
        "stage": "s0",
        "values": {
          "detalle": ""
        }
      },
      "stages": [
        {
          "id": "s0",
          "label": "Pendiente",
          "owner": "ALEX",
          "description": "Pendiente",
          "screenId": "UI-010"
        },
        {
          "id": "s1",
          "label": "Punto de regreso",
          "owner": "ALEX",
          "description": "Punto de regreso",
          "screenId": "UI-011"
        },
        {
          "id": "s2",
          "label": "Momento acordado",
          "owner": "ALEX",
          "description": "Momento acordado",
          "screenId": "UI-012"
        },
        {
          "id": "s3",
          "label": "Cierre simulado",
          "owner": null,
          "description": "Cierre simulado",
          "screenId": "UI-013"
        }
      ],
      "actions": [
        {
          "id": "A-010",
          "from": "s0",
          "to": "s1",
          "by": "ALEX",
          "label": "Guardar punto de regreso",
          "note": "Guardar punto de regreso",
          "effect": {
            "paso0": true
          },
          "inputs": [
            {
              "id": "detalle",
              "label": "Detalle del recorrido",
              "type": "text"
            }
          ]
        },
        {
          "id": "A-011",
          "from": "s1",
          "to": "s2",
          "by": "ALEX",
          "label": "Acordar momento",
          "note": "Acordar momento",
          "effect": {
            "paso1": true
          }
        },
        {
          "id": "A-012",
          "from": "s2",
          "to": "s3",
          "by": "ALEX",
          "label": "Marcar como hecha",
          "note": "Marcar como hecha",
          "effect": {
            "paso2": true
          }
        }
      ],
      "acceptance": [
        {
          "id": "AC-010",
          "title": "Guardar punto de regreso",
          "requirementIds": [
            "RF-001"
          ],
          "actionIds": [
            "A-010"
          ]
        },
        {
          "id": "AC-011",
          "title": "Acordar momento",
          "requirementIds": [
            "RF-001"
          ],
          "actionIds": [
            "A-011"
          ]
        },
        {
          "id": "AC-012",
          "title": "Marcar como hecha",
          "requirementIds": [
            "RF-001"
          ],
          "actionIds": [
            "A-012"
          ]
        }
      ]
    },
    {
      "id": "FL-002",
      "name": "Mochila de mañana",
      "objective": "Preparar materiales y solicitar apoyo",
      "source": "Recorridos conversados; datos ficticios",
      "status": "PROPUESTA",
      "personas": [
        "NICO"
      ],
      "initialCase": {
        "id": "CASO-002",
        "title": "Mochila de mañana",
        "stage": "s0",
        "values": {
          "detalle": ""
        }
      },
      "stages": [
        {
          "id": "s0",
          "label": "Por preparar",
          "owner": "NICO",
          "description": "Por preparar",
          "screenId": "UI-020"
        },
        {
          "id": "s1",
          "label": "Material faltante",
          "owner": "NICO",
          "description": "Material faltante",
          "screenId": "UI-021"
        },
        {
          "id": "s2",
          "label": "Solicitud preparada",
          "owner": "NICO",
          "description": "Solicitud preparada",
          "screenId": "UI-022"
        },
        {
          "id": "s3",
          "label": "Mochila preparada",
          "owner": null,
          "description": "Mochila preparada",
          "screenId": "UI-023"
        }
      ],
      "actions": [
        {
          "id": "A-020",
          "from": "s0",
          "to": "s1",
          "by": "NICO",
          "label": "Marcar material",
          "note": "Marcar material",
          "effect": {
            "paso0": true
          },
          "inputs": [
            {
              "id": "detalle",
              "label": "Detalle del recorrido",
              "type": "text"
            }
          ]
        },
        {
          "id": "A-021",
          "from": "s1",
          "to": "s2",
          "by": "NICO",
          "label": "Pedir ayuda simulada",
          "note": "Pedir ayuda simulada",
          "effect": {
            "paso1": true
          }
        },
        {
          "id": "A-022",
          "from": "s2",
          "to": "s3",
          "by": "NICO",
          "label": "Marcar materiales preparados",
          "note": "Marcar materiales preparados",
          "effect": {
            "paso2": true
          }
        }
      ],
      "acceptance": [
        {
          "id": "AC-020",
          "title": "Marcar material",
          "requirementIds": [
            "RF-002"
          ],
          "actionIds": [
            "A-020"
          ]
        },
        {
          "id": "AC-021",
          "title": "Pedir ayuda simulada",
          "requirementIds": [
            "RF-002"
          ],
          "actionIds": [
            "A-021"
          ]
        },
        {
          "id": "AC-022",
          "title": "Marcar materiales preparados",
          "requirementIds": [
            "RF-002"
          ],
          "actionIds": [
            "A-022"
          ]
        }
      ]
    },
    {
      "id": "FL-003",
      "name": "Compras compartidas",
      "objective": "Consultar y actualizar una lista compartida",
      "source": "Recorridos conversados; datos ficticios",
      "status": "PROPUESTA",
      "personas": [
        "ALEX"
      ],
      "initialCase": {
        "id": "CASO-003",
        "title": "Compras compartidas",
        "stage": "s0",
        "values": {
          "detalle": ""
        }
      },
      "stages": [
        {
          "id": "s0",
          "label": "Lista pendiente",
          "owner": "ALEX",
          "description": "Lista pendiente",
          "screenId": "UI-030"
        },
        {
          "id": "s1",
          "label": "Artículo comprado",
          "owner": "ALEX",
          "description": "Artículo comprado",
          "screenId": "UI-031"
        },
        {
          "id": "s2",
          "label": "Artículo no encontrado",
          "owner": "ALEX",
          "description": "Artículo no encontrado",
          "screenId": "UI-032"
        },
        {
          "id": "s3",
          "label": "Lista revisada",
          "owner": null,
          "description": "Lista revisada",
          "screenId": "UI-033"
        }
      ],
      "actions": [
        {
          "id": "A-030",
          "from": "s0",
          "to": "s1",
          "by": "ALEX",
          "label": "Marcar comprado",
          "note": "Marcar comprado",
          "effect": {
            "paso0": true
          },
          "inputs": [
            {
              "id": "detalle",
              "label": "Detalle del recorrido",
              "type": "text"
            }
          ]
        },
        {
          "id": "A-031",
          "from": "s1",
          "to": "s2",
          "by": "ALEX",
          "label": "Indicar no encontrado",
          "note": "Indicar no encontrado",
          "effect": {
            "paso1": true
          }
        },
        {
          "id": "A-032",
          "from": "s2",
          "to": "s3",
          "by": "ALEX",
          "label": "Completar revisión",
          "note": "Completar revisión",
          "effect": {
            "paso2": true
          }
        }
      ],
      "acceptance": [
        {
          "id": "AC-030",
          "title": "Marcar comprado",
          "requirementIds": [
            "RF-003"
          ],
          "actionIds": [
            "A-030"
          ]
        },
        {
          "id": "AC-031",
          "title": "Indicar no encontrado",
          "requirementIds": [
            "RF-003"
          ],
          "actionIds": [
            "A-031"
          ]
        },
        {
          "id": "AC-032",
          "title": "Completar revisión",
          "requirementIds": [
            "RF-003"
          ],
          "actionIds": [
            "A-032"
          ]
        }
      ]
    }
  ],
  "screens": [
    {
      "id": "UI-010",
      "title": "Pendiente",
      "goal": "Acompañar el regreso a una actividad",
      "source": "Conversación de discovery",
      "reviewStatus": "PROPUESTA",
      "role": "ALEX",
      "flowId": "FL-001",
      "stageId": "s0",
      "layout": "detail"
    },
    {
      "id": "UI-011",
      "title": "Punto de regreso",
      "goal": "Acompañar el regreso a una actividad",
      "source": "Conversación de discovery",
      "reviewStatus": "PROPUESTA",
      "role": "ALEX",
      "flowId": "FL-001",
      "stageId": "s1",
      "layout": "detail"
    },
    {
      "id": "UI-012",
      "title": "Momento acordado",
      "goal": "Acompañar el regreso a una actividad",
      "source": "Conversación de discovery",
      "reviewStatus": "PROPUESTA",
      "role": "ALEX",
      "flowId": "FL-001",
      "stageId": "s2",
      "layout": "detail"
    },
    {
      "id": "UI-013",
      "title": "Cierre simulado",
      "goal": "Acompañar el regreso a una actividad",
      "source": "Conversación de discovery",
      "reviewStatus": "PROPUESTA",
      "role": null,
      "flowId": "FL-001",
      "stageId": "s3",
      "layout": "detail"
    },
    {
      "id": "UI-020",
      "title": "Por preparar",
      "goal": "Preparar materiales y solicitar apoyo",
      "source": "Conversación de discovery",
      "reviewStatus": "PROPUESTA",
      "role": "NICO",
      "flowId": "FL-002",
      "stageId": "s0",
      "layout": "detail"
    },
    {
      "id": "UI-021",
      "title": "Material faltante",
      "goal": "Preparar materiales y solicitar apoyo",
      "source": "Conversación de discovery",
      "reviewStatus": "PROPUESTA",
      "role": "NICO",
      "flowId": "FL-002",
      "stageId": "s1",
      "layout": "detail"
    },
    {
      "id": "UI-022",
      "title": "Solicitud preparada",
      "goal": "Preparar materiales y solicitar apoyo",
      "source": "Conversación de discovery",
      "reviewStatus": "PROPUESTA",
      "role": "NICO",
      "flowId": "FL-002",
      "stageId": "s2",
      "layout": "detail"
    },
    {
      "id": "UI-023",
      "title": "Mochila preparada",
      "goal": "Preparar materiales y solicitar apoyo",
      "source": "Conversación de discovery",
      "reviewStatus": "PROPUESTA",
      "role": null,
      "flowId": "FL-002",
      "stageId": "s3",
      "layout": "detail"
    },
    {
      "id": "UI-030",
      "title": "Lista pendiente",
      "goal": "Consultar y actualizar una lista compartida",
      "source": "Conversación de discovery",
      "reviewStatus": "PROPUESTA",
      "role": "ALEX",
      "flowId": "FL-003",
      "stageId": "s0",
      "layout": "detail"
    },
    {
      "id": "UI-031",
      "title": "Artículo comprado",
      "goal": "Consultar y actualizar una lista compartida",
      "source": "Conversación de discovery",
      "reviewStatus": "PROPUESTA",
      "role": "ALEX",
      "flowId": "FL-003",
      "stageId": "s1",
      "layout": "detail"
    },
    {
      "id": "UI-032",
      "title": "Artículo no encontrado",
      "goal": "Consultar y actualizar una lista compartida",
      "source": "Conversación de discovery",
      "reviewStatus": "PROPUESTA",
      "role": "ALEX",
      "flowId": "FL-003",
      "stageId": "s2",
      "layout": "detail"
    },
    {
      "id": "UI-033",
      "title": "Lista revisada",
      "goal": "Consultar y actualizar una lista compartida",
      "source": "Conversación de discovery",
      "reviewStatus": "PROPUESTA",
      "role": null,
      "flowId": "FL-003",
      "stageId": "s3",
      "layout": "detail"
    }
  ],
  "uxDecisions": [
    {
      "id": "UX-001",
      "question": "Presentación de inicio",
      "status": "PROPUESTA",
      "selected": null,
      "options": [
        {
          "id": "cards",
          "label": "Tarjetas y acceso al compañero",
          "tradeoff": "Acceso visual rápido; opción preferida en la conversación."
        },
        {
          "id": "chat",
          "label": "Conversación predominante",
          "tradeoff": "Prioriza conversación; menos información inmediata."
        }
      ]
    }
  ]
};
