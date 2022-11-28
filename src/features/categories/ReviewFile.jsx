import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box,
Card,
CardBody,
CardHeader,
CardFooter,
Image,
Text,
TextInput,
Form,
FormField,
Button,
 Spinner,
} from "grommet"

 import '../../assets/css/_scoop.scss'

export { ReviewIngestion };

function ReviewIngestion() { const [value, setValue] = useState({ name: 'a', email: 'b' });
    const message =
   value.name && value.email && value.name[0] !== value.email[0]
     ? 'Mismatched first character'
     : undefined;

    const navigate = useNavigate();

    return (
        <Box style={{background:"#fff"}} align="center" pad="large" justify="center"  >

 <Text>REVIEW DATA INGESTION PARAMETERS!</Text>
            <Box  gap="small" width="1300px" >

<Form
         value={value}
          onChange={(nextValue) => setValue(nextValue)}
          onSubmit={({ value: nextValue }) => console.log(nextValue)}

        >
        <Box  gap="medium" id="review"   direction="column"  >
          <FormField label="SRC_DB" name="SRC_DB" direction="row" direction="row" required>
            <TextInput name="SRC_DB" type="SRC_DB" />
          </FormField>

          <FormField label="SRC_TABLE" name="SRC_TABLE" direction="row" required>
            <TextInput name="SRC_TABLE" type="SRC_TABLE" />
          </FormField>

          <FormField label="IS_TARGET_TABLE" name="IS_TARGET_TABLE" direction="row" required>
            <TextInput name="IS_TARGET_TABLE" type="IS_TARGET_TABLE" />
          </FormField>

          <FormField label="STAGE_HIVE_DB" name="STAGE_HIVE_DB" direction="row" required>
            <TextInput name="STAGE_HIVE_DB" type="STAGE_HIVE_DB" />
          </FormField>
          <FormField label="STAGE_HIVE_TABLE" name="STAGE_HIVE_TABLE" direction="row" required>
            <TextInput name="STAGE_HIVE_TABLE" type="STAGE_HIVE_TABLE" />
          </FormField>
          <FormField label="TARGET_HIVE_DB" name="TARGET_HIVE_DB" direction="row" required>
            <TextInput name="TARGET_HIVE_DB" type="TARGET_HIVE_DB" />
          </FormField>
          <FormField label="TARGET_HIVE_TABLE" name="TARGET_HIVE_TABLE" direction="row" required>
            <TextInput name="TARGET_HIVE_TABLE" type="TARGET_HIVE_TABLE" />
          </FormField>
          <FormField label="AUDIT_DB" name="AUDIT_DB" direction="row" required>
            <TextInput name="AUDIT_DB" type="AUDIT_DB" />
          </FormField>
          <FormField label="AUDIT_TABLE" name="AUDIT_TABLE" direction="row" required>
            <TextInput name="AUDIT_TABLE" type="AUDIT_TABLE" />
          </FormField>
          <FormField label="DATA_PROV_NAME" name="DATA_PROV_NAME" direction="row" required>
            <TextInput name="DATA_PROV_NAME" type="DATA_PROV_NAME" />
          </FormField>
          <FormField label="DATA_SET" name="DATA_SET" direction="row" required>
            <TextInput name="DATA_SET" type="DATA_SET" />
          </FormField>
          <FormField label="PROCESS_DESC" name="PROCESS_DESC" direction="row" required>
            <TextInput name="PROCESS_DESC" type="PROCESS_DESC" />
          </FormField>
          <FormField label="SOURCE_PULL_REQUIRE_TARGET_VALUE_IND" name="SOURCE_PULL_REQUIRE_TARGET_VALUE_IND" direction="row" required>
            <TextInput name="SOURCE_PULL_REQUIRE_TARGET_VALUE_IND" type="SOURCE_PULL_REQUIRE_TARGET_VALUE_IND" />
          </FormField>
          <FormField label="INCREMENT_COLUMN_NAME" name="INCREMENT_COLUMN_NAME" direction="row" required>
            <TextInput name="INCREMENT_COLUMN_NAME" type="INCREMENT_COLUMN_NAME" />
          </FormField>
          <FormField label="TARGET_QRY_FOR_INCREMENT_VALUE" name="TARGET_QRY_FOR_INCREMENT_VALUE" direction="row" required>
            <TextInput name="TARGET_QRY_FOR_INCREMENT_VALUE" type="TARGET_QRY_FOR_INCREMENT_VALUE" />
          </FormField>
          <FormField label="INCREMENT_SOURCE_TARGET_COMPARATOR" name="INCREMENT_SOURCE_TARGET_COMPARATOR" direction="row" required>
            <TextInput name="INCREMENT_SOURCE_TARGET_COMPARATOR" type="INCREMENT_SOURCE_TARGET_COMPARATOR" />
          </FormField>
          <FormField label="SOURCE_QUERY_OR_TABLE_INDICATOR" name="SOURCE_QUERY_OR_TABLE_INDICATOR" direction="row" required>
            <TextInput name="SOURCE_QUERY_OR_TABLE_INDICATOR" type="SOURCE_QUERY_OR_TABLE_INDICATOR" />
          </FormField>
          <FormField label="QUERY_TO_PULL_FROM_SOURCE" name="QUERY_TO_PULL_FROM_SOURCE" direction="row" required>
            <TextInput name="QUERY_TO_PULL_FROM_SOURCE" type="QUERY_TO_PULL_FROM_SOURCE" />
          </FormField>
          <FormField label="WHERE_CONDITION" name="WHERE_CONDITION" direction="row" required>
            <TextInput name="WHERE_CONDITION" type="WHERE_CONDITION" />
          </FormField>
          <FormField label="PRE_SQL_FOR_TARGET" name="PRE_SQL_FOR_TARGET" direction="row" required>
            <TextInput name="PRE_SQL_FOR_TARGET" type="PRE_SQL_FOR_TARGET" />
          </FormField>
          <FormField label="MAPHIVECOL" name="MAPHIVECOL" direction="row" required>
            <TextInput name="MAPHIVECOL" type="MAPHIVECOL" />
          </FormField>
          <FormField label="TGTFILEPATH" name="TGTFILEPATH" direction="row" required>
            <TextInput name="TGTFILEPATH" type="TGTFILEPATH" />
          </FormField>
          <FormField label="BKPFILEPATH" name="BKPFILEPATH" direction="row" required>
            <TextInput name="BKPFILEPATH" type="BKPFILEPATH" />
          </FormField>
          <FormField label="ConnectionURL" name="ConnectionURL" direction="row" required>
            <TextInput name="ConnectionURL" type="ConnectionURL" />
          </FormField>
          <FormField label="UserName" name="UserName" direction="row" required>
            <TextInput name="UserName" type="UserName" />
          </FormField>
          <FormField label="SplitColumn" name="SplitColumn" direction="row" required>
            <TextInput name="SplitColumn" type="SplitColumn" />
          </FormField>
          <FormField label="TableMapperNum" name="TableMapperNum" direction="row" required>
            <TextInput name="TableMapperNum" type="TableMapperNum" />
          </FormField>
          <FormField label="QueryMapperNum" name="QueryMapperNum" direction="row" required>
            <TextInput name="QueryMapperNum" type="QueryMapperNum" />
          </FormField>
          <FormField label="InputByMethod" name="InputByMethod" direction="row" required>
            <TextInput name="InputByMethod" type="InputByMethod" />
          </FormField>
          <FormField label="IsSourcePartitioned" name="IsSourcePartitioned" direction="row" required>
            <TextInput name="IsSourcePartitioned" type="IsSourcePartitioned" />
          </FormField>
          <FormField label="CHARSET" name="CHARSET" direction="row" required>
            <TextInput name="CHARSET" type="CHARSET" />
          </FormField>
          <FormField label="BOUNDARY_QUERY_PARAMS" name="BOUNDARY_QUERY_PARAMS" direction="row" required>
            <TextInput name="BOUNDARY_QUERY_PARAMS" type="BOUNDARY_QUERY_PARAMS" />
          </FormField>
          <FormField label="SQOOP_PARAMS" name="SQOOP_PARAMS" direction="row" required>
            <TextInput name="SQOOP_PARAMS" type="SQOOP_PARAMS" />
          </FormField>
          <FormField label="CLOUDERA_PARAMS" name="CLOUDERA_PARAMS" direction="row" required>
            <TextInput name="CLOUDERA_PARAMS" type="CLOUDERA_PARAMS" />
          </FormField>
          <FormField label="DEFAULT_APACHE_CONNECTOR" name="DEFAULT_APACHE_CONNECTOR" direction="row" required>
            <TextInput name="DEFAULT_APACHE_CONNECTOR" type="DEFAULT_APACHE_CONNECTOR" />
          </FormField>
          <FormField label="TRUNCATE_APPEND" name="TRUNCATE_APPEND" direction="row" required>
            <TextInput name="TRUNCATE_APPEND" type="TRUNCATE_APPEND" />
          </FormField>
          <FormField label="PARTITION_COLUMNS" name="PARTITION_COLUMNS" direction="row" required>
            <TextInput name="PARTITION_COLUMNS" type="PARTITION_COLUMNS" />
          </FormField>
          <FormField label="DROP_PARTITION_WITH_VALUE" name="DROP_PARTITION_WITH_VALUE" direction="row" required>
            <TextInput name="DROP_PARTITION_WITH_VALUE" type="DROP_PARTITION_WITH_VALUE" />
          </FormField>
          <FormField label="PasswordFile" name="PasswordFile" direction="row" required>
            <TextInput name="PasswordFile" type="PasswordFile" />
          </FormField>
          <FormField label="Driver" name="Driver" direction="row" required>
            <TextInput name="Driver" type="Driver" />
          </FormField>
          <FormField label="APACHE_CONNECTOR_LIB_PATH" name="APACHE_CONNECTOR_LIB_PATH" direction="row" required>
            <TextInput name="APACHE_CONNECTOR_LIB_PATH" type="APACHE_CONNECTOR_LIB_PATH" />
          </FormField>
          <FormField label="SPARKPARAM" name="SPARKPARAM" direction="row" required>
            <TextInput name="SPARKPARAM" type="SPARKPARAM" />
          </FormField>

          {message && (
            <Box pad={{ horizontal: 'small' }}>
              <Text color="status-error">{message}</Text>
            </Box>
          )}


          </Box>
            <Box direction="row" justify="between" margin={{ top: 'medium' }}>
            <Button
              onClick={() => navigate('/sqoop')}
              type="button"
              label="Have Changes? Update!"
            />
            <Button type="submit" label="Load PRM File" primary />
          </Box>
        </Form>
            </Box>
        </Box>
    );
}
