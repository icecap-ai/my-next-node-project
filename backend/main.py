# simulator/main.py
import pandas as pd
import numpy as np

def generate_simulation_data():
    # 무작위 데이터 생성 예시 (100개의 샘플)
    df = pd.DataFrame({
        'time': np.arange(1, 101),
        'value': np.random.rand(100)
    })

    # CSV로 저장
    df.to_csv('simulation_output.csv', index=False)
    print("✅ 시뮬레이션 데이터 생성 완료! (simulation_output.csv)")

if __name__ == "__main__":
    generate_simulation_data()