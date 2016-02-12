App.view.define('VNewTicket', {
    extend: "Ext.window.Window",
    alias: 'widget.VNewTicket',
    initComponent: function() {
        this.width = 1024;
        this.height = 660;
		
		this.title = "Ticket";
		
        this.layout = {
            type: 'border'
        };

        this.bbar = [
            {
                text: "Annuler",
                handler: function(p) {
                    p.up('window').close();
                }
            },
            '->',
            {
                text: "Valider",
                itemId: "validate"
            }
        ];

        this.tbar = [
        ];
		
        this.defaults = {
            split: false
        };

        this.items = [
            {
                region: "east",
                layout: "fit",
                title: "Historique",
                width: 570,
                tbar: [
                    {
                        text: "Ajouter un commentaire",
                        iconCls: "bd",
                        itemId: "addComment"
                    }
                ],
                items: [
                    {
                        border: false,
                        itemId: "timeline",
                        width: "100%",
                        html: ""
                    }
                ]                
            },
            {
                region: "center",
                layout: "vbox",
                items: [
                    {
                        xtype: "combo",
                        itemId: "agent",
                        width: "100%",
                        typeAhead: false,
                        queryMode: 'local',
                        forceSelection: true, 
                        triggerAction: 'query',                        
                        triggerCls : Ext.baseCSSPrefix + 'form-search-trigger',
                        margin: 5,
                        hideTrigger: false,
                        fieldLabel: "Agent concerné",
                        labelAlign: "top",
                        displayField: "nomprenom",
                        valueField: "Kage",
                        store: App.store.create({fields:[],data:[]}),
                        selectOnFocus:true,
                        bind: "agent"
                    },
                    {
                        xtype: "textfield",
                        itemId: "titre",
                        width: "100%",
                        margin: 5,
                        fieldLabel: "Titre",
                        labelAlign: "top",
                        bind: "titre"
                    },
                    {
                        html: "",
                        itemId: "cli",
                        height: 30
                    },
                    {
                        xtype: "htmleditor",
                        itemId: "demande",
                        height: 180,
                        margin: 5,
                        width: "100%",
                        fieldLabel: "Demande initiale",
                        labelAlign: "top",
                        bind: "demande"
                    },
                    {
                        xtype: "checkbox",
                        boxLabel: "Demande d'achat",
                        margin: 5
                    }
                ]
            }
		];

        this.callParent();
    }
});