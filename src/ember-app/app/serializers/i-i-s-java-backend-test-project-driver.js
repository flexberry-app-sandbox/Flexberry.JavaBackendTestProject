import { Serializer as DriverSerializer } from
  '../mixins/regenerated/serializers/i-i-s-java-backend-test-project-driver';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(DriverSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
