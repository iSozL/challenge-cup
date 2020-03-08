import React from 'react';
import KingShop from '../businessIntroduction/kingShop'
import Limit from '../businessIntroduction/limit'
import { PageHeader,Descriptions } from 'antd'
function Activities() {
  return(
    <div>
      <PageHeader title='医学看点' subTitle='Medical View'>
        <Descriptions>
          <Descriptions.Item>今日剩余观看次数：5</Descriptions.Item>
        </Descriptions>
      </PageHeader>
      <KingShop />
      <Limit />
    </div>
  )
}
export default Activities