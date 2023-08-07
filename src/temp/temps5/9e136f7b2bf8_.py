"""empty message

Revision ID: 9e136f7b2bf8
Revises: c8e7badfcc97
Create Date: 2023-08-06 17:04:17.296003

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9e136f7b2bf8'
down_revision = 'c8e7badfcc97'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('review', schema=None) as batch_op:
        batch_op.alter_column('category',
               existing_type=sa.VARCHAR(length=250),
               type_=sa.Enum('activity', 'product', 'trip', name='myenum'),
               existing_nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('review', schema=None) as batch_op:
        batch_op.alter_column('category',
               existing_type=sa.Enum('activity', 'product', 'trip', name='myenum'),
               type_=sa.VARCHAR(length=250),
               existing_nullable=True)

    # ### end Alembic commands ###
