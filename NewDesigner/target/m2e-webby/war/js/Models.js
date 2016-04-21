
Ext.define("xyz_policy",
    {
      "xcpModelType" : "xyz_policy",
      "extend" : "xcp.data.BusinessObjectModel",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/xyz_policys"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "first_name",
        "type" : "string"
      }, {
        "name" : "last_name",
        "type" : "string"
      }, {
        "name" : "new_string",
        "type" : "string"
      }, {
        "name" : "age",
        "type" : "string"
      }, {
        "name" : "coverage",
        "useNull" : true,
        "type" : "float"
      }, {
        "name" : "end_date",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xyz_policy_template",
    {
      "xcpModelType" : "xyz_policy",
      "extend" : "xcp.data.BusinessObjectModel",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/xyz_policys/template"
      },
      "fields" : [ {
        "name" : "first_name",
        "type" : "string"
      }, {
        "name" : "last_name",
        "type" : "string"
      }, {
        "name" : "new_string",
        "type" : "string"
      }, {
        "name" : "age",
        "type" : "string"
      }, {
        "name" : "coverage",
        "useNull" : true,
        "type" : "float"
      }, {
        "name" : "end_date",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xyz_abc",
    {
      "xcpModelType" : "xyz_abc",
      "extend" : "xcp.data.BusinessObjectModel",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/xyz_abcs"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xyz_abc_template",
    {
      "xcpModelType" : "xyz_abc",
      "extend" : "xcp.data.BusinessObjectModel",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/xyz_abcs/template"
      },
      "fields" : [ {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xyz_vehicle",
    {
      "xcpModelType" : "xyz_vehicle",
      "extend" : "xcp.data.BusinessObjectModel",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/xyz_vehicles"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "make",
        "type" : "string"
      }, {
        "name" : "model",
        "type" : "string"
      }, {
        "name" : "vehicle_year",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "vin",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xyz_vehicle_template",
    {
      "xcpModelType" : "xyz_vehicle",
      "extend" : "xcp.data.BusinessObjectModel",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/xyz_vehicles/template"
      },
      "fields" : [ {
        "name" : "make",
        "type" : "string"
      }, {
        "name" : "model",
        "type" : "string"
      }, {
        "name" : "vehicle_year",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "vin",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_RootBO",
    {
      "xcpModelType" : "xcp_RootBO",
      "extend" : "xcp.data.BusinessObjectModel",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/xcp_RootBOs"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_RootBO_template",
    {
      "xcpModelType" : "xcp_RootBO",
      "extend" : "xcp.data.BusinessObjectModel",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/xcp_RootBOs/template"
      },
      "fields" : [ {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xyz_claim",
    {
      "xcpModelType" : "xyz_claim",
      "extend" : "xcp.data.FolderModel",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/xyz_claims"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "incident_date",
        "type" : "string"
      }, {
        "name" : "incident_location",
        "type" : "string"
      }, {
        "name" : "amount",
        "useNull" : true,
        "type" : "float"
      }, {
        "name" : "vehicle_in_motion",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "claim_status",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "authors",
        "type" : "array"
      }, {
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_folder_path",
        "type" : "array"
      }, {
        "name" : "r_link_cnt",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      }, "links" ]
    }
);

Ext.define("xyz_claim_template",
    {
      "xcpModelType" : "xyz_claim",
      "extend" : "xcp.data.FolderModel",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/xyz_claims/template"
      },
      "fields" : [ {
        "name" : "incident_date",
        "type" : "string"
      }, {
        "name" : "incident_location",
        "type" : "string"
      }, {
        "name" : "amount",
        "useNull" : true,
        "type" : "float"
      }, {
        "name" : "vehicle_in_motion",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "claim_status",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "authors",
        "type" : "array"
      }, {
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_folder_path",
        "type" : "array"
      }, {
        "name" : "r_link_cnt",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_dm_folder",
    {
      "xcpModelType" : "xcp_dm_folder",
      "extend" : "xcp.data.FolderModel",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_folders"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "authors",
        "type" : "array"
      }, {
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_folder_path",
        "type" : "array"
      }, {
        "name" : "r_link_cnt",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      }, "links" ]
    }
);

Ext.define("xcp_dm_folder_template",
    {
      "xcpModelType" : "xcp_dm_folder",
      "extend" : "xcp.data.FolderModel",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_folders/template"
      },
      "fields" : [ {
        "name" : "authors",
        "type" : "array"
      }, {
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_folder_path",
        "type" : "array"
      }, {
        "name" : "r_link_cnt",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_folderlist_0",
    {
      "xcpModelType" : "xcp_dm_folder",
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest_folder",
        "url" : "application/xcp_dm_folders"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "authors",
        "type" : "array"
      }, {
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_folder_path",
        "type" : "array"
      }, {
        "name" : "r_link_cnt",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      }, {
        "name" : "icon",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, "links" ]
    }
);

Ext.define("xcp_dm_document",
    {
      "xcpModelType" : "xcp_dm_document",
      "extend" : "xcp.data.ContentModel",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_documents"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "owner_name",
        "type" : "string"
      }, {
        "name" : "a_status",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "authors",
        "type" : "array"
      }, {
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "i_chronicle_id",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      }, "links" ]
    }
);

Ext.define("xcp_dm_document_template",
    {
      "xcpModelType" : "xcp_dm_document",
      "extend" : "xcp.data.ContentModel",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_documents/template"
      },
      "fields" : [ {
        "name" : "owner_name",
        "type" : "string"
      }, {
        "name" : "a_status",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "authors",
        "type" : "array"
      }, {
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "i_chronicle_id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_currenttask",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "act_name",
        "type" : "string"
      }, {
        "name" : "qitem_id",
        "type" : "string"
      }, {
        "name" : "creation_date",
        "type" : "string"
      }, {
        "name" : "due_date",
        "type" : "string"
      }, {
        "name" : "performer",
        "type" : "string"
      }, {
        "name" : "performer_address",
        "type" : "string"
      }, {
        "name" : "priority",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "state",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "name",
        "type" : "string"
      }, {
        "name" : "task_subject",
        "type" : "string"
      }, {
        "name" : "queue_name",
        "type" : "string"
      }, {
        "name" : "instructions",
        "type" : "string"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "received_date",
        "type" : "string"
      }, {
        "name" : "received_from",
        "type" : "string"
      }, {
        "name" : "requirements",
        "type" : "string"
      }, {
        "name" : "isdelegable",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "isrepeatable",
        "useNull" : true,
        "type" : "boolean"
      } ]
    }
);

Ext.define("xcp_taskworkflow",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.WorkflowModel",
      "fields" : [ {
        "name" : "correlation_identifier",
        "type" : "string"
      }, {
        "name" : "process_id",
        "type" : "string"
      }, {
        "name" : "r_creater_name",
        "type" : "string"
      }, {
        "name" : "r_start_date",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "r_runtime_state",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "supervisor_name",
        "type" : "string"
      }, {
        "name" : "supervisor_address",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_ExecutionData",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "currenttask",
        "type" : "xcp_currenttask"
      }, {
        "name" : "taskworkflow",
        "type" : "xcp_taskworkflow"
      } ]
    }
);

Ext.define("xcp_fetchcontenttypes_initiate_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "content_types",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_fetchcontenttypes_initiate_template",
    {
      "xcpModelType" : "xcp_fetchcontenttypes",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_fetchcontenttypes_initiate_processVariables"
      } ]
    }
);

Ext.define("xcp_fetchtypes_initiate_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "inputs",
        "type" : "array"
      }, {
        "name" : "inputs_label",
        "type" : "array"
      }, {
        "name" : "outputs",
        "type" : "array"
      }, {
        "name" : "outputs_label",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_fetchtypes_initiate_template",
    {
      "xcpModelType" : "xcp_fetchtypes",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_fetchtypes_initiate_processVariables"
      } ]
    }
);

Ext.define("xcp_fetchcontentformats_initiate_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "dos_extension",
        "type" : "string"
      }, {
        "name" : "format_description",
        "type" : "array"
      }, {
        "name" : "format_name",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_fetchcontentformats_initiate_template",
    {
      "xcpModelType" : "xcp_fetchcontentformats",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_fetchcontentformats_initiate_processVariables"
      } ]
    }
);

Ext.define("xyz_claim_create_and_relate_to_policy_initiate_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "amount",
        "useNull" : true,
        "type" : "float"
      }, {
        "name" : "incident_date",
        "type" : "string"
      }, {
        "name" : "incident_location",
        "type" : "string"
      }, {
        "name" : "policy_id",
        "type" : "string"
      }, {
        "name" : "vehicle_id",
        "type" : "string"
      }, {
        "name" : "vehicle_in_motion",
        "useNull" : true,
        "type" : "boolean"
      } ]
    }
);

Ext.define("xyz_claim_create_and_relate_to_policy_initiate_template",
    {
      "xcpModelType" : "xyz_claim_create_and_relate_to_policy",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
            "vehicle_in_motion" : "false"
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xyz_claim_create_and_relate_to_policy_initiate_processVariables"
      } ]
    }
);

Ext.define("xcp_getfolderid_initiate_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "folder_id",
        "type" : "string"
      }, {
        "name" : "folder_path",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_getfolderid_initiate_template",
    {
      "xcpModelType" : "xcp_getfolderid",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_getfolderid_initiate_processVariables"
      } ]
    }
);

Ext.define("xcp_user_from_queue_initiate_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "queue_name",
        "type" : "string"
      }, {
        "name" : "user_list",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_user_from_queue_initiate_template",
    {
      "xcpModelType" : "xcp_user_from_queue",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_user_from_queue_initiate_processVariables"
      } ]
    }
);

Ext.define("xyz__vehicle_create_relate_to_policy_initiate_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "end_date",
        "type" : "string"
      }, {
        "name" : "make",
        "type" : "string"
      }, {
        "name" : "model",
        "type" : "string"
      }, {
        "name" : "notes",
        "type" : "string"
      }, {
        "name" : "policy_id",
        "type" : "string"
      }, {
        "name" : "start_date",
        "type" : "string"
      }, {
        "name" : "vin",
        "type" : "string"
      }, {
        "name" : "year",
        "useNull" : true,
        "type" : "int"
      } ]
    }
);

Ext.define("xyz__vehicle_create_relate_to_policy_initiate_processPackages",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "vehicle",
        "type" : "xyz_vehicle_template"
      } ]
    }
);

Ext.define("xyz__vehicle_create_relate_to_policy_initiate_template",
    {
      "xcpModelType" : "xyz__vehicle_create_relate_to_policy",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "data" : {
          "processPackages" : {
            "vehicle" : {
            }
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xyz__vehicle_create_relate_to_policy_initiate_processVariables"
      }, {
        "name" : "processPackages",
        "type" : "xyz__vehicle_create_relate_to_policy_initiate_processPackages"
      } ]
    }
);

Ext.define("xyz_test_java_initiate_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "address",
        "type" : "array"
      }, {
        "name" : "cover",
        "type" : "array"
      }, {
        "name" : "end_date",
        "type" : "array"
      }, {
        "name" : "f_name",
        "type" : "array"
      }, {
        "name" : "last_name",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "array"
      }, {
        "name" : "oid",
        "type" : "array"
      } ]
    }
);

Ext.define("xyz_test_java_initiate_template",
    {
      "xcpModelType" : "xyz_test_java",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xyz_test_java_initiate_processVariables"
      } ]
    }
);

Ext.define("xcp_userorgroup_selecti_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "starts_with_filter",
        "type" : "string"
      }, {
        "name" : "user_group_name",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_userorgroup_selecti_template",
    {
      "xcpModelType" : "xcp_userorgroup_selecti",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_userorgroup_selecti_processVariables"
      } ]
    }
);

Ext.define("xcp_taskhistory_initiate_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "activity_name",
        "type" : "array"
      }, {
        "name" : "date",
        "type" : "array"
      }, {
        "name" : "performer",
        "type" : "array"
      }, {
        "name" : "process_instance_id",
        "type" : "string"
      }, {
        "name" : "status",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_taskhistory_initiate_template",
    {
      "xcpModelType" : "xcp_taskhistory",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_taskhistory_initiate_processVariables"
      } ]
    }
);

Ext.define("xcp_queue_list_initiate_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "queuelist",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_queue_list_initiate_template",
    {
      "xcpModelType" : "xcp_queue_list",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_queue_list_initiate_processVariables"
      } ]
    }
);

Ext.define("xcp_activity_list_initiate_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "act_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "output_activity_names",
        "type" : "array"
      }, {
        "name" : "port_type",
        "type" : "string"
      }, {
        "name" : "process_id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_activity_list_initiate_template",
    {
      "xcpModelType" : "xcp_activity_list",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_activity_list_initiate_processVariables"
      } ]
    }
);

Ext.define("xyz_approve_reject_claim_initiate_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "approved",
        "useNull" : true,
        "type" : "int"
      } ]
    }
);

Ext.define("xyz_approve_reject_claim_initiate_template",
    {
      "xcpModelType" : "xyz_approve_reject_claim",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
            "approved" : "0"
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xyz_approve_reject_claim_initiate_processVariables"
      } ]
    }
);

Ext.define("xyz_approve_reject_claim_first_approval_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "approved",
        "useNull" : true,
        "type" : "int"
      } ]
    }
);

Ext.define("xyz_approve_reject_claim_first_approval_processPackages",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "claim",
        "type" : "xyz_claim"
      } ]
    }
);

Ext.define("xyz_approve_reject_claim_first_approval",
    {
      "xcpModelType" : "xyz_approve_reject_claim",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/tasks",
        "extraParams" : {
          "type" : "approve_reject_claim_first_approval"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xyz_approve_reject_claim_first_approval_processVariables"
      }, {
        "name" : "executionData",
        "type" : "xcp_ExecutionData"
      }, {
        "name" : "processPackages",
        "type" : "xyz_approve_reject_claim_first_approval_processPackages"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_approve_reject_claim_second_approval_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "approved",
        "useNull" : true,
        "type" : "int"
      } ]
    }
);

Ext.define("xyz_approve_reject_claim_second_approval_processPackages",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "claim",
        "type" : "xyz_claim"
      } ]
    }
);

Ext.define("xyz_approve_reject_claim_second_approval",
    {
      "xcpModelType" : "xyz_approve_reject_claim",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/tasks",
        "extraParams" : {
          "type" : "approve_reject_claim_second_approval"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xyz_approve_reject_claim_second_approval_processVariables"
      }, {
        "name" : "executionData",
        "type" : "xcp_ExecutionData"
      }, {
        "name" : "processPackages",
        "type" : "xyz_approve_reject_claim_second_approval_processPackages"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_da_def_relate_vehicle_policy_vehicle",
    {
      "xcpModelType" : "xyz_vehicle_policy",
      "extend" : "xcp.data.BaseRelationModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relationships/xyz_vehicle_policys",
        "extraParams" : {
          "type" : "xyz_da_def_relate_vehicle_policy_vehicle"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "relate",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "targetId",
        "type" : "string"
      }, {
        "name" : "start_date",
        "type" : "string"
      }, {
        "name" : "end_date",
        "type" : "string"
      }, {
        "name" : "notes",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_da_def_relate_vehicle_policy_policy",
    {
      "xcpModelType" : "xyz_vehicle_policy",
      "extend" : "xcp.data.BaseRelationModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relationships/xyz_vehicle_policys",
        "extraParams" : {
          "type" : "xyz_da_def_relate_vehicle_policy_policy"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "relate",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "targetId",
        "type" : "string"
      }, {
        "name" : "start_date",
        "type" : "string"
      }, {
        "name" : "end_date",
        "type" : "string"
      }, {
        "name" : "notes",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_da_def_update_vehicle_policy",
    {
      "xcpModelType" : "xyz_vehicle_policy",
      "extend" : "xcp.data.BaseRelationModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relationships/xyz_vehicle_policys",
        "extraParams" : {
          "type" : "xyz_da_def_update_vehicle_policy"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "update",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "start_date",
        "type" : "string"
      }, {
        "name" : "end_date",
        "type" : "string"
      }, {
        "name" : "notes",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_da_def_delete_vehicle_policy",
    {
      "xcpModelType" : "xyz_vehicle_policy",
      "extend" : "xcp.data.BaseRelationModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relationships/xyz_vehicle_policys",
        "extraParams" : {
          "type" : "xyz_da_def_delete_vehicle_policy"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "delete",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_da_def_relate_claim_vehicle_claim",
    {
      "xcpModelType" : "xyz_claim_vehicle",
      "extend" : "xcp.data.BaseRelationModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relationships/xyz_claim_vehicles",
        "extraParams" : {
          "type" : "xyz_da_def_relate_claim_vehicle_claim"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "relate",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "targetId",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_da_def_relate_claim_vehicle_vehicle",
    {
      "xcpModelType" : "xyz_claim_vehicle",
      "extend" : "xcp.data.BaseRelationModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relationships/xyz_claim_vehicles",
        "extraParams" : {
          "type" : "xyz_da_def_relate_claim_vehicle_vehicle"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "relate",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "targetId",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_da_def_update_claim_vehicle",
    {
      "xcpModelType" : "xyz_claim_vehicle",
      "extend" : "xcp.data.BaseRelationModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relationships/xyz_claim_vehicles",
        "extraParams" : {
          "type" : "xyz_da_def_update_claim_vehicle"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "update",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_da_def_delete_claim_vehicle",
    {
      "xcpModelType" : "xyz_claim_vehicle",
      "extend" : "xcp.data.BaseRelationModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relationships/xyz_claim_vehicles",
        "extraParams" : {
          "type" : "xyz_da_def_delete_claim_vehicle"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "delete",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_da_def_create_test_java_initiate_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "address",
        "type" : "array"
      }, {
        "name" : "cover",
        "type" : "array"
      }, {
        "name" : "end_date",
        "type" : "array"
      }, {
        "name" : "f_name",
        "type" : "array"
      }, {
        "name" : "last_name",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "array"
      }, {
        "name" : "oid",
        "type" : "array"
      } ]
    }
);

Ext.define("xyz_da_def_create_test_java_initiate",
    {
      "xcpModelType" : "xyz_test_java",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xyz_test_java",
        "extraParams" : {
          "type" : "xyz_da_def_create_test_java_initiate"
        }
      },
      "xcpActionType" : "create",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xyz_da_def_create_test_java_initiate_processVariables"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("xyz_da_def_invoke_stateless_processclaim_create_and_relate_to_policy_initiate_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "amount",
        "type" : "float"
      }, {
        "name" : "incident_date",
        "type" : "string"
      }, {
        "name" : "incident_location",
        "type" : "string"
      }, {
        "name" : "policy_id",
        "type" : "string"
      }, {
        "name" : "vehicle_id",
        "type" : "string"
      }, {
        "name" : "vehicle_in_motion",
        "type" : "boolean"
      } ]
    }
);

Ext.define("xyz_da_def_invoke_stateless_processclaim_create_and_relate_to_policy_initiate",
    {
      "xcpModelType" : "xyz_claim_create_and_relate_to_policy",
      "extend" : "xcp.data.StatelessProcessObjectModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xyz_claim_create_and_relate_to_policy",
        "extraParams" : {
          "type" : "stateless"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "initiatestatelessprocess",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xyz_da_def_invoke_stateless_processclaim_create_and_relate_to_policy_initiate_processVariables"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_da_def_create_claim_create_and_relate_to_policy_initiate_processPackages_claim",
    {
      "xcpModelType" : "xyz_claim",
      "extend" : "xcp.data.FolderModel",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_da_def_create_claim_create_and_relate_to_policy_initiate_processPackages",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "claim",
        "type" : "xyz_da_def_create_claim_create_and_relate_to_policy_initiate_processPackages_claim"
      } ]
    }
);

Ext.define("xyz_da_def_create_claim_create_and_relate_to_policy_initiate_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "amount",
        "type" : "float"
      }, {
        "name" : "incident_date",
        "type" : "string"
      }, {
        "name" : "incident_location",
        "type" : "string"
      }, {
        "name" : "policy_id",
        "type" : "string"
      }, {
        "name" : "vehicle_id",
        "type" : "string"
      }, {
        "name" : "vehicle_in_motion",
        "type" : "boolean"
      } ]
    }
);

Ext.define("xyz_da_def_create_claim_create_and_relate_to_policy_initiate",
    {
      "xcpModelType" : "xyz_claim_create_and_relate_to_policy",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xyz_claim_create_and_relate_to_policy",
        "extraParams" : {
          "type" : "xyz_da_def_create_claim_create_and_relate_to_policy_initiate"
        }
      },
      "xcpActionType" : "create",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xyz_da_def_create_claim_create_and_relate_to_policy_initiate_processVariables"
      }, {
        "name" : "processPackages",
        "type" : "xyz_da_def_create_claim_create_and_relate_to_policy_initiate_processPackages"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("xyz_da_def_create_test_initiate_processPackages_claim",
    {
      "xcpModelType" : "xyz_claim",
      "extend" : "xcp.data.FolderModel",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_da_def_create_test_initiate_processPackages",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "claim",
        "type" : "xyz_da_def_create_test_initiate_processPackages_claim"
      } ]
    }
);

Ext.define("xyz_da_def_create_test_initiate_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "approved",
        "type" : "int"
      } ]
    }
);

Ext.define("xyz_da_def_create_test_initiate",
    {
      "xcpModelType" : "xyz_approve_reject_claim",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xyz_approve_reject_claim",
        "extraParams" : {
          "type" : "xyz_da_def_create_test_initiate"
        }
      },
      "xcpActionType" : "create",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xyz_da_def_create_test_initiate_processVariables"
      }, {
        "name" : "processPackages",
        "type" : "xyz_da_def_create_test_initiate_processPackages"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("xyz_da_def_repeat_test_manual_task_processPackages_claim",
    {
      "xcpModelType" : "xyz_claim",
      "extend" : "xcp.data.FolderModel",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "amount",
        "type" : "float"
      }, {
        "name" : "claim_status",
        "type" : "int"
      }, {
        "name" : "incident_date",
        "type" : "string"
      }, {
        "name" : "incident_location",
        "type" : "string"
      }, {
        "name" : "vehicle_in_motion",
        "type" : "boolean"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_da_def_repeat_test_manual_task_processPackages",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "claim",
        "type" : "xyz_da_def_repeat_test_manual_task_processPackages_claim"
      } ]
    }
);

Ext.define("xyz_da_def_repeat_test_manual_task_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "approved",
        "type" : "int"
      } ]
    }
);

Ext.define("xyz_da_def_repeat_test_manual_task",
    {
      "xcpModelType" : "xyz_approve_reject_claim",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/tasks/{id}/repeat",
        "extraParams" : {
          "type" : "xyz_da_def_repeat_test_manual_task"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "repeattask",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xyz_da_def_repeat_test_manual_task_processVariables"
      }, {
        "name" : "processPackages",
        "type" : "xyz_da_def_repeat_test_manual_task_processPackages"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "userName",
        "type" : "array"
      } ]
    }
);

Ext.define("xyz_da_def_update_test_manual_task_processPackages_claim",
    {
      "xcpModelType" : "xyz_claim",
      "extend" : "xcp.data.FolderModel",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "amount",
        "type" : "float"
      }, {
        "name" : "claim_status",
        "type" : "int"
      }, {
        "name" : "incident_date",
        "type" : "string"
      }, {
        "name" : "incident_location",
        "type" : "string"
      }, {
        "name" : "vehicle_in_motion",
        "type" : "boolean"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_da_def_update_test_manual_task_processPackages",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "claim",
        "type" : "xyz_da_def_update_test_manual_task_processPackages_claim"
      } ]
    }
);

Ext.define("xyz_da_def_update_test_manual_task_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "approved",
        "type" : "int"
      } ]
    }
);

Ext.define("xyz_da_def_update_test_manual_task",
    {
      "xcpModelType" : "xyz_approve_reject_claim",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/tasks/{id}/update",
        "extraParams" : {
          "type" : "xyz_da_def_update_test_manual_task"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "updatetask",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xyz_da_def_update_test_manual_task_processVariables"
      }, {
        "name" : "processPackages",
        "type" : "xyz_da_def_update_test_manual_task_processPackages"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_da_def_delegate_test_manual_task_processPackages_claim",
    {
      "xcpModelType" : "xyz_claim",
      "extend" : "xcp.data.FolderModel",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "amount",
        "type" : "float"
      }, {
        "name" : "claim_status",
        "type" : "int"
      }, {
        "name" : "incident_date",
        "type" : "string"
      }, {
        "name" : "incident_location",
        "type" : "string"
      }, {
        "name" : "vehicle_in_motion",
        "type" : "boolean"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_da_def_delegate_test_manual_task_processPackages",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "claim",
        "type" : "xyz_da_def_delegate_test_manual_task_processPackages_claim"
      } ]
    }
);

Ext.define("xyz_da_def_delegate_test_manual_task_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "approved",
        "type" : "int"
      } ]
    }
);

Ext.define("xyz_da_def_delegate_test_manual_task",
    {
      "xcpModelType" : "xyz_approve_reject_claim",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/tasks/{id}/delegate",
        "extraParams" : {
          "type" : "xyz_da_def_delegate_test_manual_task"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "delegatetask",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xyz_da_def_delegate_test_manual_task_processVariables"
      }, {
        "name" : "processPackages",
        "type" : "xyz_da_def_delegate_test_manual_task_processPackages"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "userName",
        "type" : "array"
      } ]
    }
);

Ext.define("xyz_da_def_complete_test_manual_task_processPackages_claim",
    {
      "xcpModelType" : "xyz_claim",
      "extend" : "xcp.data.FolderModel",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "amount",
        "type" : "float"
      }, {
        "name" : "claim_status",
        "type" : "int"
      }, {
        "name" : "incident_date",
        "type" : "string"
      }, {
        "name" : "incident_location",
        "type" : "string"
      }, {
        "name" : "vehicle_in_motion",
        "type" : "boolean"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_da_def_complete_test_manual_task_processPackages",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "claim",
        "type" : "xyz_da_def_complete_test_manual_task_processPackages_claim"
      } ]
    }
);

Ext.define("xyz_da_def_complete_test_manual_task_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "approved",
        "type" : "int"
      } ]
    }
);

Ext.define("xyz_da_def_complete_test_manual_task",
    {
      "xcpModelType" : "xyz_approve_reject_claim",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/tasks/{id}/complete",
        "extraParams" : {
          "type" : "xyz_da_def_complete_test_manual_task"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "completetask",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xyz_da_def_complete_test_manual_task_processVariables"
      }, {
        "name" : "processPackages",
        "type" : "xyz_da_def_complete_test_manual_task_processPackages"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_da_def_repeat_test_manual_task_1_processPackages_claim",
    {
      "xcpModelType" : "xyz_claim",
      "extend" : "xcp.data.FolderModel",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "amount",
        "type" : "float"
      }, {
        "name" : "claim_status",
        "type" : "int"
      }, {
        "name" : "incident_date",
        "type" : "string"
      }, {
        "name" : "incident_location",
        "type" : "string"
      }, {
        "name" : "vehicle_in_motion",
        "type" : "boolean"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_da_def_repeat_test_manual_task_1_processPackages",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "claim",
        "type" : "xyz_da_def_repeat_test_manual_task_1_processPackages_claim"
      } ]
    }
);

Ext.define("xyz_da_def_repeat_test_manual_task_1_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "approved",
        "type" : "int"
      } ]
    }
);

Ext.define("xyz_da_def_repeat_test_manual_task_1",
    {
      "xcpModelType" : "xyz_approve_reject_claim",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/tasks/{id}/repeat",
        "extraParams" : {
          "type" : "xyz_da_def_repeat_test_manual_task_1"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "repeattask",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xyz_da_def_repeat_test_manual_task_1_processVariables"
      }, {
        "name" : "processPackages",
        "type" : "xyz_da_def_repeat_test_manual_task_1_processPackages"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "userName",
        "type" : "array"
      } ]
    }
);

Ext.define("xyz_da_def_update_test_manual_task_1_processPackages_claim",
    {
      "xcpModelType" : "xyz_claim",
      "extend" : "xcp.data.FolderModel",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "amount",
        "type" : "float"
      }, {
        "name" : "claim_status",
        "type" : "int"
      }, {
        "name" : "incident_date",
        "type" : "string"
      }, {
        "name" : "incident_location",
        "type" : "string"
      }, {
        "name" : "vehicle_in_motion",
        "type" : "boolean"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_da_def_update_test_manual_task_1_processPackages",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "claim",
        "type" : "xyz_da_def_update_test_manual_task_1_processPackages_claim"
      } ]
    }
);

Ext.define("xyz_da_def_update_test_manual_task_1_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "approved",
        "type" : "int"
      } ]
    }
);

Ext.define("xyz_da_def_update_test_manual_task_1",
    {
      "xcpModelType" : "xyz_approve_reject_claim",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/tasks/{id}/update",
        "extraParams" : {
          "type" : "xyz_da_def_update_test_manual_task_1"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "updatetask",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xyz_da_def_update_test_manual_task_1_processVariables"
      }, {
        "name" : "processPackages",
        "type" : "xyz_da_def_update_test_manual_task_1_processPackages"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_da_def_delegate_test_manual_task_1_processPackages_claim",
    {
      "xcpModelType" : "xyz_claim",
      "extend" : "xcp.data.FolderModel",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "amount",
        "type" : "float"
      }, {
        "name" : "claim_status",
        "type" : "int"
      }, {
        "name" : "incident_date",
        "type" : "string"
      }, {
        "name" : "incident_location",
        "type" : "string"
      }, {
        "name" : "vehicle_in_motion",
        "type" : "boolean"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_da_def_delegate_test_manual_task_1_processPackages",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "claim",
        "type" : "xyz_da_def_delegate_test_manual_task_1_processPackages_claim"
      } ]
    }
);

Ext.define("xyz_da_def_delegate_test_manual_task_1_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "approved",
        "type" : "int"
      } ]
    }
);

Ext.define("xyz_da_def_delegate_test_manual_task_1",
    {
      "xcpModelType" : "xyz_approve_reject_claim",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/tasks/{id}/delegate",
        "extraParams" : {
          "type" : "xyz_da_def_delegate_test_manual_task_1"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "delegatetask",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xyz_da_def_delegate_test_manual_task_1_processVariables"
      }, {
        "name" : "processPackages",
        "type" : "xyz_da_def_delegate_test_manual_task_1_processPackages"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "userName",
        "type" : "array"
      } ]
    }
);

Ext.define("xyz_da_def_complete_test_manual_task_1_processPackages_claim",
    {
      "xcpModelType" : "xyz_claim",
      "extend" : "xcp.data.FolderModel",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "amount",
        "type" : "float"
      }, {
        "name" : "claim_status",
        "type" : "int"
      }, {
        "name" : "incident_date",
        "type" : "string"
      }, {
        "name" : "incident_location",
        "type" : "string"
      }, {
        "name" : "vehicle_in_motion",
        "type" : "boolean"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_da_def_complete_test_manual_task_1_processPackages",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "claim",
        "type" : "xyz_da_def_complete_test_manual_task_1_processPackages_claim"
      } ]
    }
);

Ext.define("xyz_da_def_complete_test_manual_task_1_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "approved",
        "type" : "int"
      } ]
    }
);

Ext.define("xyz_da_def_complete_test_manual_task_1",
    {
      "xcpModelType" : "xyz_approve_reject_claim",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/tasks/{id}/complete",
        "extraParams" : {
          "type" : "xyz_da_def_complete_test_manual_task_1"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "completetask",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xyz_da_def_complete_test_manual_task_1_processVariables"
      }, {
        "name" : "processPackages",
        "type" : "xyz_da_def_complete_test_manual_task_1_processPackages"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_create_fetchtypes_initiate_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "outputs_label",
        "type" : "array"
      }, {
        "name" : "inputs_label",
        "type" : "array"
      }, {
        "name" : "inputs",
        "type" : "array"
      }, {
        "name" : "outputs",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_da_def_create_fetchtypes_initiate",
    {
      "xcpModelType" : "xcp_fetchtypes",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_fetchtypes",
        "extraParams" : {
          "type" : "xcp_da_def_create_fetchtypes_initiate"
        }
      },
      "xcpActionType" : "create",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_da_def_create_fetchtypes_initiate_processVariables"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_da_def_create_fetchcontenttypes_initiate_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "content_types",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_da_def_create_fetchcontenttypes_initiate",
    {
      "xcpModelType" : "xcp_fetchcontenttypes",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_fetchcontenttypes",
        "extraParams" : {
          "type" : "xcp_da_def_create_fetchcontenttypes_initiate"
        }
      },
      "xcpActionType" : "create",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_da_def_create_fetchcontenttypes_initiate_processVariables"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("xyz_da_def_invoke_stateless_processvehicle_create_relate_to_policy_initiate_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "end_date",
        "type" : "string"
      }, {
        "name" : "make",
        "type" : "string"
      }, {
        "name" : "model",
        "type" : "string"
      }, {
        "name" : "notes",
        "type" : "string"
      }, {
        "name" : "policy_id",
        "type" : "string"
      }, {
        "name" : "start_date",
        "type" : "string"
      }, {
        "name" : "vin",
        "type" : "string"
      }, {
        "name" : "year",
        "type" : "int"
      } ]
    }
);

Ext.define("xyz_da_def_invoke_stateless_processvehicle_create_relate_to_policy_initiate",
    {
      "xcpModelType" : "xyz__vehicle_create_relate_to_policy",
      "extend" : "xcp.data.StatelessProcessObjectModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xyz__vehicle_create_relate_to_policy",
        "extraParams" : {
          "type" : "stateless"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "initiatestatelessprocess",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xyz_da_def_invoke_stateless_processvehicle_create_relate_to_policy_initiate_processVariables"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_da_def_create_vehicle_create_relate_to_policy_initiate_processPackages_vehicle",
    {
      "xcpModelType" : "xyz_vehicle",
      "extend" : "xcp.data.BusinessObjectModel",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "make",
        "type" : "string"
      }, {
        "name" : "model",
        "type" : "string"
      }, {
        "name" : "vin",
        "type" : "string"
      }, {
        "name" : "vehicle_year",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_da_def_create_vehicle_create_relate_to_policy_initiate_processPackages",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "vehicle",
        "type" : "xyz_da_def_create_vehicle_create_relate_to_policy_initiate_processPackages_vehicle"
      } ]
    }
);

Ext.define("xyz_da_def_create_vehicle_create_relate_to_policy_initiate_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "end_date",
        "type" : "string"
      }, {
        "name" : "make",
        "type" : "string"
      }, {
        "name" : "model",
        "type" : "string"
      }, {
        "name" : "notes",
        "type" : "string"
      }, {
        "name" : "policy_id",
        "type" : "string"
      }, {
        "name" : "start_date",
        "type" : "string"
      }, {
        "name" : "vin",
        "type" : "string"
      }, {
        "name" : "year",
        "type" : "int"
      } ]
    }
);

Ext.define("xyz_da_def_create_vehicle_create_relate_to_policy_initiate",
    {
      "xcpModelType" : "xyz__vehicle_create_relate_to_policy",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xyz__vehicle_create_relate_to_policy",
        "extraParams" : {
          "type" : "xyz_da_def_create_vehicle_create_relate_to_policy_initiate"
        }
      },
      "xcpActionType" : "create",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xyz_da_def_create_vehicle_create_relate_to_policy_initiate_processVariables"
      }, {
        "name" : "processPackages",
        "type" : "xyz_da_def_create_vehicle_create_relate_to_policy_initiate_processPackages"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_da_def_create_getfolderid_initiate_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "folder_id",
        "type" : "string"
      }, {
        "name" : "folder_path",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_create_getfolderid_initiate",
    {
      "xcpModelType" : "xcp_getfolderid",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_getfolderid",
        "extraParams" : {
          "type" : "xcp_da_def_create_getfolderid_initiate"
        }
      },
      "xcpActionType" : "create",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_da_def_create_getfolderid_initiate_processVariables"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_da_def_create_fetchcontentformats_initiate_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "dos_extension",
        "type" : "string"
      }, {
        "name" : "format_description",
        "type" : "array"
      }, {
        "name" : "format_name",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_da_def_create_fetchcontentformats_initiate",
    {
      "xcpModelType" : "xcp_fetchcontentformats",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_fetchcontentformats",
        "extraParams" : {
          "type" : "xcp_da_def_create_fetchcontentformats_initiate"
        }
      },
      "xcpActionType" : "create",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_da_def_create_fetchcontentformats_initiate_processVariables"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("xyz_da_def_create_policy",
    {
      "xcpModelType" : "xyz_policy",
      "extend" : "xcp.data.BusinessObjectModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xyz_policys",
        "extraParams" : {
          "type" : "xyz_da_def_create_policy"
        }
      },
      "xcpActionType" : "create",
      "fields" : [ {
        "name" : "new_string",
        "type" : "string"
      }, {
        "name" : "age",
        "type" : "string"
      }, {
        "name" : "coverage",
        "type" : "float"
      }, {
        "name" : "end_date",
        "type" : "string"
      }, {
        "name" : "first_name",
        "type" : "string"
      }, {
        "name" : "last_name",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_da_def_update_policy",
    {
      "xcpModelType" : "xyz_policy",
      "extend" : "xcp.data.BusinessObjectModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xyz_policys",
        "extraParams" : {
          "type" : "xyz_da_def_update_policy"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "update",
      "fields" : [ {
        "name" : "new_string",
        "type" : "string"
      }, {
        "name" : "age",
        "type" : "string"
      }, {
        "name" : "coverage",
        "type" : "float"
      }, {
        "name" : "end_date",
        "type" : "string"
      }, {
        "name" : "first_name",
        "type" : "string"
      }, {
        "name" : "last_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_da_def_delete_policy",
    {
      "xcpModelType" : "xyz_policy",
      "extend" : "xcp.data.BusinessObjectModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xyz_policys",
        "extraParams" : {
          "type" : "xyz_da_def_delete_policy"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "delete",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_da_def_create_abc",
    {
      "xcpModelType" : "xyz_abc",
      "extend" : "xcp.data.BusinessObjectModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xyz_abcs",
        "extraParams" : {
          "type" : "xyz_da_def_create_abc"
        }
      },
      "xcpActionType" : "create",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_da_def_update_abc",
    {
      "xcpModelType" : "xyz_abc",
      "extend" : "xcp.data.BusinessObjectModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xyz_abcs",
        "extraParams" : {
          "type" : "xyz_da_def_update_abc"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "update",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_da_def_delete_abc",
    {
      "xcpModelType" : "xyz_abc",
      "extend" : "xcp.data.BusinessObjectModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xyz_abcs",
        "extraParams" : {
          "type" : "xyz_da_def_delete_abc"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "delete",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_da_def_create_vehicle",
    {
      "xcpModelType" : "xyz_vehicle",
      "extend" : "xcp.data.BusinessObjectModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xyz_vehicles",
        "extraParams" : {
          "type" : "xyz_da_def_create_vehicle"
        }
      },
      "xcpActionType" : "create",
      "fields" : [ {
        "name" : "make",
        "type" : "string"
      }, {
        "name" : "model",
        "type" : "string"
      }, {
        "name" : "vin",
        "type" : "string"
      }, {
        "name" : "vehicle_year",
        "type" : "int"
      }, {
        "name" : "object_name",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_da_def_update_vehicle",
    {
      "xcpModelType" : "xyz_vehicle",
      "extend" : "xcp.data.BusinessObjectModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xyz_vehicles",
        "extraParams" : {
          "type" : "xyz_da_def_update_vehicle"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "update",
      "fields" : [ {
        "name" : "make",
        "type" : "string"
      }, {
        "name" : "model",
        "type" : "string"
      }, {
        "name" : "vin",
        "type" : "string"
      }, {
        "name" : "vehicle_year",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_da_def_delete_vehicle",
    {
      "xcpModelType" : "xyz_vehicle",
      "extend" : "xcp.data.BusinessObjectModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xyz_vehicles",
        "extraParams" : {
          "type" : "xyz_da_def_delete_vehicle"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "delete",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_create_rootbo",
    {
      "xcpModelType" : "xcp_RootBO",
      "extend" : "xcp.data.BusinessObjectModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_RootBOs",
        "extraParams" : {
          "type" : "xcp_da_def_create_rootbo"
        }
      },
      "xcpActionType" : "create",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_update_rootbo",
    {
      "xcpModelType" : "xcp_RootBO",
      "extend" : "xcp.data.BusinessObjectModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_RootBOs",
        "extraParams" : {
          "type" : "xcp_da_def_update_rootbo"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "update",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_delete_rootbo",
    {
      "xcpModelType" : "xcp_RootBO",
      "extend" : "xcp.data.BusinessObjectModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_RootBOs",
        "extraParams" : {
          "type" : "xcp_da_def_delete_rootbo"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "delete",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_selector_rootbo",
    {
      "xcpModelType" : "xcp_RootBO",
      "extend" : "xcp.data.BusinessObjectModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_RootBOs",
        "extraParams" : {
          "type" : "xcp_da_def_selector_rootbo"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "selector",
      "fields" : [ {
        "name" : "selection",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_import_dm_document",
    {
      "xcpModelType" : "xcp_dm_document",
      "extend" : "xcp.data.ContentModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_documents",
        "extraParams" : {
          "type" : "xcp_da_def_import_dm_document"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "import",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_importtemplate_dm_document",
    {
      "xcpModelType" : "xcp_dm_document",
      "extend" : "xcp.data.ContentModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_documents",
        "extraParams" : {
          "type" : "xcp_da_def_importtemplate_dm_document"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "importtemplate",
      "fields" : [ {
        "name" : "folder_id",
        "type" : "string"
      }, {
        "name" : "content_id",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_importnewversion_dm_document",
    {
      "xcpModelType" : "xcp_dm_document",
      "extend" : "xcp.data.ContentModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_documents",
        "extraParams" : {
          "type" : "xcp_da_def_importnewversion_dm_document"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "importnewversion",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "checkin_version",
        "type" : "int"
      }, {
        "name" : "checkin_label",
        "type" : "string"
      }, {
        "name" : "retain_lock",
        "type" : "boolean"
      } ]
    }
);

Ext.define("xcp_da_def_importnewversiontemplate_dm_document",
    {
      "xcpModelType" : "xcp_dm_document",
      "extend" : "xcp.data.ContentModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_documents",
        "extraParams" : {
          "type" : "xcp_da_def_importnewversiontemplate_dm_document"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "importnewversiontemplate",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "checkin_version",
        "type" : "int"
      }, {
        "name" : "checkin_label",
        "type" : "string"
      }, {
        "name" : "retain_lock",
        "type" : "boolean"
      }, {
        "name" : "is_current",
        "type" : "boolean"
      }, {
        "name" : "content_id",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_create_dm_document",
    {
      "xcpModelType" : "xcp_dm_document",
      "extend" : "xcp.data.ContentModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_documents",
        "extraParams" : {
          "type" : "xcp_da_def_create_dm_document"
        }
      },
      "xcpActionType" : "create",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "folder_id",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "source",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_create_template_dm_document",
    {
      "xcpModelType" : "xcp_dm_document",
      "extend" : "xcp.data.ContentModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_documents",
        "extraParams" : {
          "type" : "xcp_da_def_create_template_dm_document"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "createdocumenttemplate",
      "fields" : [ {
        "name" : "folder_id",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "source",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_update_dm_document",
    {
      "xcpModelType" : "xcp_dm_document",
      "extend" : "xcp.data.ContentModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_documents",
        "extraParams" : {
          "type" : "xcp_da_def_update_dm_document"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "update",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_delete_dm_document",
    {
      "xcpModelType" : "xcp_dm_document",
      "extend" : "xcp.data.ContentModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_documents",
        "extraParams" : {
          "type" : "xcp_da_def_delete_dm_document"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "delete",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_da_def_create_claim",
    {
      "xcpModelType" : "xyz_claim",
      "extend" : "xcp.data.FolderModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xyz_claims",
        "extraParams" : {
          "type" : "xyz_da_def_create_claim"
        }
      },
      "xcpActionType" : "create",
      "fields" : [ {
        "name" : "amount",
        "type" : "float"
      }, {
        "name" : "claim_status",
        "type" : "int"
      }, {
        "name" : "incident_date",
        "type" : "string"
      }, {
        "name" : "incident_location",
        "type" : "string"
      }, {
        "name" : "vehicle_in_motion",
        "type" : "boolean"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_da_def_update_claim",
    {
      "xcpModelType" : "xyz_claim",
      "extend" : "xcp.data.FolderModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xyz_claims",
        "extraParams" : {
          "type" : "xyz_da_def_update_claim"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "update",
      "fields" : [ {
        "name" : "amount",
        "type" : "float"
      }, {
        "name" : "claim_status",
        "type" : "int"
      }, {
        "name" : "incident_date",
        "type" : "string"
      }, {
        "name" : "incident_location",
        "type" : "string"
      }, {
        "name" : "vehicle_in_motion",
        "type" : "boolean"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_da_def_delete_claim",
    {
      "xcpModelType" : "xyz_claim",
      "extend" : "xcp.data.FolderModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xyz_claims",
        "extraParams" : {
          "type" : "xyz_da_def_delete_claim"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "delete",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_create_dm_folder",
    {
      "xcpModelType" : "xcp_dm_folder",
      "extend" : "xcp.data.FolderModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_folders",
        "extraParams" : {
          "type" : "xcp_da_def_create_dm_folder"
        }
      },
      "xcpActionType" : "create",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_create_template_dm_folder",
    {
      "xcpModelType" : "xcp_dm_folder",
      "extend" : "xcp.data.FolderModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_folders",
        "extraParams" : {
          "type" : "xcp_da_def_create_template_dm_folder"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "createfoldertemplate",
      "fields" : [ {
        "name" : "folder_id",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_update_dm_folder",
    {
      "xcpModelType" : "xcp_dm_folder",
      "extend" : "xcp.data.FolderModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_folders",
        "extraParams" : {
          "type" : "xcp_da_def_update_dm_folder"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "update",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_delete_dm_folder",
    {
      "xcpModelType" : "xcp_dm_folder",
      "extend" : "xcp.data.FolderModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_folders",
        "extraParams" : {
          "type" : "xcp_da_def_delete_dm_folder"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "delete",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_tasklist_outputs",
    {
      "xcpModelType" : "xyz_tasklist",
      "extend" : "xcp.data.TaskListDataSourceModel",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_tasks",
        "extraParams" : {
          "type" : "xyz_tasklist"
        }
      },
      "fields" : [ {
        "name" : "task_name",
        "type" : "string"
      }, {
        "name" : "task_subject",
        "type" : "string"
      }, {
        "name" : "task_date_sent",
        "type" : "string"
      }, {
        "name" : "task_sent_by",
        "type" : "string"
      }, {
        "name" : "process_name",
        "type" : "string"
      }, {
        "name" : "task_performer_name",
        "type" : "string"
      }, {
        "name" : "task_state",
        "type" : "int"
      }, {
        "name" : "workqueue_name",
        "type" : "string"
      }, {
        "name" : "process_system_name",
        "type" : "string"
      }, {
        "name" : "activity_system_name",
        "type" : "string"
      }, {
        "name" : "is_rejectable",
        "type" : "boolean"
      }, {
        "name" : "is_repeatable",
        "type" : "boolean"
      }, {
        "name" : "is_delegable",
        "type" : "boolean"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_folder_rt_query_outputs",
    {
      "xcpModelType" : "xcp_folder_rt_query",
      "extend" : "xcp.data.RealTimeDataSourceModel",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_folders",
        "extraParams" : {
          "type" : "xcp_folder_rt_query"
        }
      },
      "fields" : [ {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xyz_claim_related_to_po_outputs",
    {
      "xcpModelType" : "xyz_claim_related_to_po",
      "extend" : "xcp.data.RealTimeDataSourceModel",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xyz_claims",
        "extraParams" : {
          "type" : "xyz_claim_related_to_po"
        }
      },
      "fields" : [ {
        "name" : "incident_date",
        "type" : "string"
      }, {
        "name" : "incident_location",
        "type" : "string"
      }, {
        "name" : "vehicle_in_motion",
        "type" : "boolean"
      }, {
        "name" : "claim_status",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xyz_vehicles_related_to_outputs",
    {
      "xcpModelType" : "xyz_vehicles_related_to",
      "extend" : "xcp.data.RealTimeDataSourceModel",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xyz_vehicles",
        "extraParams" : {
          "type" : "xyz_vehicles_related_to"
        }
      },
      "fields" : [ {
        "name" : "make",
        "type" : "string"
      }, {
        "name" : "model",
        "type" : "string"
      }, {
        "name" : "vehicle_year",
        "type" : "int"
      }, {
        "name" : "vin",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "policychild_policyvehiclestart_date",
        "type" : "array"
      }, {
        "name" : "policychild_policyvehicleend_date",
        "type" : "array"
      }, {
        "name" : "policychild_policyvehiclenotes",
        "type" : "array"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xyz_policy_search_outputs",
    {
      "xcpModelType" : "xyz_policy_search",
      "extend" : "xcp.data.RealTimeDataSourceModel",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xyz_policys",
        "extraParams" : {
          "type" : "xyz_policy_search"
        }
      },
      "fields" : [ {
        "name" : "last_name",
        "type" : "string"
      }, {
        "name" : "first_name",
        "type" : "string"
      }, {
        "name" : "new_string",
        "type" : "string"
      }, {
        "name" : "coverage",
        "type" : "float"
      }, {
        "name" : "end_date",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "age",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_content_rt_query_outputs",
    {
      "xcpModelType" : "xcp_content_rt_query",
      "extend" : "xcp.data.RealTimeDataSourceModel",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_documents",
        "extraParams" : {
          "type" : "xcp_content_rt_query"
        }
      },
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xyz_test_java_initiate_staless_ds_outputs",
    {
      "xcpModelType" : "xyz_test_java",
      "extend" : "xcp.data.StatelessProcessCollectionModel",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xyz_test_java_initiate",
        "extraParams" : {
          "type" : "xyz_test_java_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "address",
        "type" : "string"
      }, {
        "name" : "cover",
        "type" : "int"
      }, {
        "name" : "end_date",
        "type" : "string"
      }, {
        "name" : "f_name",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "oid",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xyz_test_java_initiate_staless_ds_inputs_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "last_name",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_test_java_initiate_staless_ds_inputs",
    {
      "xcpModelType" : "xyz_test_java",
      "extend" : "xcp.data.StatelessProcessObjectModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xyz_test_java_initiate_staless_dss",
        "extraParams" : {
          "type" : "stateless"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xyz_test_java_initiate_staless_ds_inputs_processVariables"
      } ]
    }
);

Ext.define("xcp_fetchtypes_initiate_staless_ds_outputs",
    {
      "xcpModelType" : "xcp_fetchtypes",
      "extend" : "xcp.data.StatelessProcessCollectionModel",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_fetchtypes_initiate",
        "extraParams" : {
          "type" : "xcp_fetchtypes_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "outputs_label",
        "type" : "string"
      }, {
        "name" : "outputs",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_fetchtypes_initiate_staless_ds_inputs_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "inputs_label",
        "type" : "array"
      }, {
        "name" : "inputs",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_fetchtypes_initiate_staless_ds_inputs",
    {
      "xcpModelType" : "xcp_fetchtypes",
      "extend" : "xcp.data.StatelessProcessObjectModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_fetchtypes_initiate_staless_dss",
        "extraParams" : {
          "type" : "stateless"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_fetchtypes_initiate_staless_ds_inputs_processVariables"
      } ]
    }
);

Ext.define("xcp_userorgroup_selecti_staless_ds_outputs",
    {
      "xcpModelType" : "xcp_userorgroup_selecti",
      "extend" : "xcp.data.StatelessProcessCollectionModel",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_userorgroup_selecti",
        "extraParams" : {
          "type" : "xcp_userorgroup_selecti_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "user_group_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_userorgroup_selecti_staless_ds_inputs_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "starts_with_filter",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_userorgroup_selecti_staless_ds_inputs",
    {
      "xcpModelType" : "xcp_userorgroup_selecti",
      "extend" : "xcp.data.StatelessProcessObjectModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_userorgroup_selecti_staless_dss",
        "extraParams" : {
          "type" : "stateless"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_userorgroup_selecti_staless_ds_inputs_processVariables"
      } ]
    }
);

Ext.define("xcp_user_from_queue_initiate_staless_ds_outputs",
    {
      "xcpModelType" : "xcp_user_from_queue",
      "extend" : "xcp.data.StatelessProcessCollectionModel",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_user_from_queue_initiate",
        "extraParams" : {
          "type" : "xcp_user_from_queue_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "user_list",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_user_from_queue_initiate_staless_ds_inputs_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_user_from_queue_initiate_staless_ds_inputs",
    {
      "xcpModelType" : "xcp_user_from_queue",
      "extend" : "xcp.data.StatelessProcessObjectModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_user_from_queue_initiate_staless_dss",
        "extraParams" : {
          "type" : "stateless"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_user_from_queue_initiate_staless_ds_inputs_processVariables"
      } ]
    }
);

Ext.define("xcp_fetchcontenttypes_initiate_staless_ds_outputs",
    {
      "xcpModelType" : "xcp_fetchcontenttypes",
      "extend" : "xcp.data.StatelessProcessCollectionModel",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_fetchcontenttypes_initiate",
        "extraParams" : {
          "type" : "xcp_fetchcontenttypes_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "content_types",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_fetchcontenttypes_initiate_staless_ds_inputs",
    {
      "xcpModelType" : "xcp_fetchcontenttypes",
      "extend" : "xcp.data.StatelessProcessObjectModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_fetchcontenttypes_initiate_staless_dss",
        "extraParams" : {
          "type" : "stateless"
        }
      },
      "fields" : [ ]
    }
);

Ext.define("xcp_taskhistory_initiate_staless_ds_outputs",
    {
      "xcpModelType" : "xcp_taskhistory",
      "extend" : "xcp.data.StatelessProcessCollectionModel",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_taskhistory_initiate",
        "extraParams" : {
          "type" : "xcp_taskhistory_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "activity_name",
        "type" : "string"
      }, {
        "name" : "date",
        "type" : "string"
      }, {
        "name" : "performer",
        "type" : "string"
      }, {
        "name" : "status",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_taskhistory_initiate_staless_ds_inputs_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "process_instance_id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_taskhistory_initiate_staless_ds_inputs",
    {
      "xcpModelType" : "xcp_taskhistory",
      "extend" : "xcp.data.StatelessProcessObjectModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_taskhistory_initiate_staless_dss",
        "extraParams" : {
          "type" : "stateless"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_taskhistory_initiate_staless_ds_inputs_processVariables"
      } ]
    }
);

Ext.define("xcp_getfolderid_initiate_staless_ds_outputs_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "folder_id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_getfolderid_initiate_staless_ds_outputs",
    {
      "xcpModelType" : "xcp_getfolderid",
      "extend" : "xcp.data.StatelessProcessObjectModel",
      "proxy" : {
        "reader" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_getfolderid_initiate",
        "extraParams" : {
          "type" : "xcp_getfolderid_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_getfolderid_initiate_staless_ds_outputs_processVariables"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_getfolderid_initiate_staless_ds_inputs_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "folder_path",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_getfolderid_initiate_staless_ds_inputs",
    {
      "xcpModelType" : "xcp_getfolderid",
      "extend" : "xcp.data.StatelessProcessObjectModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_getfolderid_initiate_staless_dss",
        "extraParams" : {
          "type" : "stateless"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_getfolderid_initiate_staless_ds_inputs_processVariables"
      } ]
    }
);

Ext.define("xcp_queue_list_initiate_staless_ds_outputs",
    {
      "xcpModelType" : "xcp_queue_list",
      "extend" : "xcp.data.StatelessProcessCollectionModel",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_queue_list_initiate",
        "extraParams" : {
          "type" : "xcp_queue_list_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "queuelist",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_queue_list_initiate_staless_ds_inputs",
    {
      "xcpModelType" : "xcp_queue_list",
      "extend" : "xcp.data.StatelessProcessObjectModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_queue_list_initiate_staless_dss",
        "extraParams" : {
          "type" : "stateless"
        }
      },
      "fields" : [ ]
    }
);

Ext.define("xcp_fetchcontentformats_initiate_staless_ds_outputs",
    {
      "xcpModelType" : "xcp_fetchcontentformats",
      "extend" : "xcp.data.StatelessProcessCollectionModel",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_fetchcontentformats_initiate",
        "extraParams" : {
          "type" : "xcp_fetchcontentformats_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "format_description",
        "type" : "string"
      }, {
        "name" : "format_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_fetchcontentformats_initiate_staless_ds_inputs_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "dos_extension",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_fetchcontentformats_initiate_staless_ds_inputs",
    {
      "xcpModelType" : "xcp_fetchcontentformats",
      "extend" : "xcp.data.StatelessProcessObjectModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_fetchcontentformats_initiate_staless_dss",
        "extraParams" : {
          "type" : "stateless"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_fetchcontentformats_initiate_staless_ds_inputs_processVariables"
      } ]
    }
);

Ext.define("xcp_activity_list_initiate_staless_ds_outputs",
    {
      "xcpModelType" : "xcp_activity_list",
      "extend" : "xcp.data.StatelessProcessCollectionModel",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_activity_list_initiate",
        "extraParams" : {
          "type" : "xcp_activity_list_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "output_activity_names",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_activity_list_initiate_staless_ds_inputs_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "port_type",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_activity_list_initiate_staless_ds_inputs",
    {
      "xcpModelType" : "xcp_activity_list",
      "extend" : "xcp.data.StatelessProcessObjectModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_activity_list_initiate_staless_dss",
        "extraParams" : {
          "type" : "stateless"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_activity_list_initiate_staless_ds_inputs_processVariables"
      } ]
    }
);

Ext.define("xcp_versionHistoryQuery_outputs",
    {
      "xcpModelType" : "xcp_dm_document",
      "extend" : "versions_history_model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/sysobject",
        "extraParams" : {
          "type" : "versionHistoryQuery"
        }
      },
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_networklocation_selecti_ds_outputs",
    {
      "xcpModelType" : "xcp_dm_document",
      "extend" : "network_location_model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/networkLocations",
        "extraParams" : {
          "type" : "xcp_networklocation_selecti_ds"
        }
      },
      "fields" : [ {
        "name" : "location_id",
        "type" : "string"
      }, {
        "name" : "location_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_attachment_viewer_ds_outputs",
    {
      "xcpModelType" : "xcp_attachment_viewer_ds",
      "extend" : "xcp.data.RealTimeDataSourceModel",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_documents",
        "extraParams" : {
          "type" : "xcp_attachment_viewer_ds"
        }
      },
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_ds_collection_content_templates_outputs",
    {
      "xcpModelType" : "xcp_repository",
      "extend" : "xcp.data.ContentTemplateModel",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "pplication/xcp_dm_documents",
        "extraParams" : {
          "type" : "xcp_ds_collection_content_templates"
        }
      },
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_ds_collection_templates_formats_outputs",
    {
      "xcpModelType" : "xcp_repository",
      "extend" : "xcp.data.ContentTemplateFormatsModel",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "pplication/xcp_dm_documents",
        "extraParams" : {
          "type" : "xcp_ds_collection_templates_formats"
        }
      },
      "fields" : [ {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_ds_user_roles_outputs",
    {
      "xcpModelType" : "xcp_member",
      "extend" : "user_role_model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "pplication/xcp_dm_documents",
        "extraParams" : {
          "type" : "xcp_ds_user_roles"
        }
      },
      "fields" : [ {
        "name" : "name",
        "type" : "string"
      }, {
        "name" : "label",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_folderQuery_outputs",
    {
      "xcpModelType" : "xcp_folderQuery",
      "extend" : "xcp.data.RealTimeDataSourceModel",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/sysobject",
        "extraParams" : {
          "type" : "folderQuery"
        }
      },
      "linkrel" : "http://identifiers.emc.com/linkrel/objects",
      "fields" : [ {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "icon",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_link_cnt",
        "type" : "int"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_selector_content",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ ]
    }
);

Ext.define("xcp_def_imp_af",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "content_types",
        "type" : "array"
      }, {
        "name" : "default_content_type",
        "type" : "string"
      }, {
        "name" : "content_formats",
        "type" : "array"
      }, {
        "name" : "default_content_format",
        "type" : "string"
      }, {
        "name" : "folder_id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_default_create_docu",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "content_types",
        "type" : "array"
      }, {
        "name" : "default_content_type",
        "type" : "string"
      }, {
        "name" : "content_formats",
        "type" : "array"
      }, {
        "name" : "default_content_format",
        "type" : "string"
      }, {
        "name" : "folder_id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_attachment_sel",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "folderRoot",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_create_claim_and_re",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "policy_id",
        "type" : "string"
      }, {
        "name" : "vehicle_id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_def_inv_af",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "r_object_id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_selector_folder",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ ]
    }
);

Ext.define("xcp_default_create_fold",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "folder_types",
        "type" : "array"
      }, {
        "name" : "default_folder_type",
        "type" : "string"
      }, {
        "name" : "default_folder_path",
        "type" : "string"
      }, {
        "name" : "parent_folder_id",
        "type" : "string"
      } ]
    }
);

Ext.define("xyz_create_vehicle",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "policy",
        "type" : "string"
      } ]
    }
);

Ext.define("roles",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.RoleModel",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "rest",
        "url" : "application/roles"
      },
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "name",
        "type" : "string"
      }, {
        "name" : "label",
        "type" : "string"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "namespace",
        "type" : "string"
      } ]
    }
);

Ext.define("role",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.RoleModel",
      "proxy" : {
        "reader" : {
          "type" : "json"
        },
        "type" : "rest",
        "url" : "application/role"
      },
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "name",
        "type" : "string"
      }, {
        "name" : "label",
        "type" : "string"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "namespace",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp.data.model.UserPreferences",
    {
      "xcpModelType" : "xcp_preference",
      "extend" : "xcp.data.PreferencesModel",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/currentUser/preferences",
        "extraParams" : {
          "fields" : "workflowAutoNextTask,role,delegate_task,delegateToUser,networkLocation"
        }
      },
      "fields" : [ {
        "name" : "workflowAutoNextTask",
        "mapping" : "workflowautonexttask",
        "type" : "string"
      }, {
        "name" : "role",
        "mapping" : "role",
        "type" : "string"
      }, {
        "name" : "delegate_task",
        "mapping" : "delegate_task",
        "type" : "string"
      }, {
        "name" : "delegateToUser",
        "mapping" : "delegatetouser",
        "type" : "string"
      }, {
        "name" : "networkLocation",
        "mapping" : "networklocation",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp.data.model.SessionVariableModel",
    {
      "extend" : "xcp.data.Model",
      "proxy" : null,
      "cookieEnabledFields" : [ "xyz_last_policy_id" ],
      "fields" : [ {
        "name" : "xyz_last_policy_id",
        "type" : "string"
      } ]
    }
);
