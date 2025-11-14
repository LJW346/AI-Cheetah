import 'package:flutter/material.dart';

void main() => runApp(AIHeetahApp());

class AIHeetahApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'AI猎豹 v3.0 Demo',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: MainTabs(),
    );
  }
}

class MainTabs extends StatefulWidget {
  @override
  State<MainTabs> createState() => _MainTabsState();
}

class _MainTabsState extends State<MainTabs> {
  int idx = 0;
  final pages = [AIPage(), MarketPage(), TradePage(), ProfilePage()];
  @override
  Widget build(BuildContext context) => Scaffold(
    appBar: AppBar(title: Text('AI猎豹')),
    body: pages[idx],
    bottomNavigationBar: BottomNavigationBar(
      currentIndex: idx,
      onTap: (i) => setState(()=> idx = i),
      items: [
        BottomNavigationBarItem(icon: Icon(Icons.pets), label: 'AI猎豹'),
        BottomNavigationBarItem(icon: Icon(Icons.show_chart), label: '市场'),
        BottomNavigationBarItem(icon: Icon(Icons.swap_horiz), label: '交易'),
        BottomNavigationBarItem(icon: Icon(Icons.person), label: '我的'),
      ],
    ),
  );
}

class AIPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ListView(
      padding: EdgeInsets.all(12),
      children: [
        Text('总资产估值： --', style: TextStyle(fontSize: 20)),
        SizedBox(height:8),
        Text('今日盈亏： --'),
        SizedBox(height:12),
        Card(child: Padding(padding: EdgeInsets.all(12), child: Column(
          children: [
            Text('主流币滑动预测区（可左右滑动）'),
            SizedBox(height:8),
            Container(height: 200, color: Colors.grey[200], child: Center(child: Text('K线 + AI猎豹预测图（占屏40%）'))),
          ],
        ))),
        SizedBox(height:12),
        Text('功能区： 我的持仓 / AI猎豹信号 / 策略中心 / 风险分析 / 更多'),
      ],
    );
  }
}

class MarketPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) => Center(child: Text('市场 - 自选 / 全部币种 / 猎豹优选'));
}

class TradePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) => Center(child: Text('交易页面（包含K线、买卖、合约等）'));
}

class ProfilePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) => Center(child: Text('个人中心 - 用户信息 / 会员 / 邀请'));
}
